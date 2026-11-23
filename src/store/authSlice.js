import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const load = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};

async function hash(text) {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { getState, rejectWithValue }) => {
    const e = email.trim().toLowerCase();
    if (getState().auth.users.some((u) => u.email === e)) {
      return rejectWithValue("Email này đã được đăng ký.");
    }
    return { name: name.trim(), email: e, passwordHash: await hash(password) };
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { getState, rejectWithValue }) => {
    const e = email.trim().toLowerCase();
    const user = getState().auth.users.find((u) => u.email === e);
    if (!user || user.passwordHash !== (await hash(password))) {
      return rejectWithValue("Email hoặc mật khẩu không đúng.");
    }
    return user.email;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: load("auth", { users: [], currentEmail: null }),
  reducers: {
    logout(state) {
      state.currentEmail = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.currentEmail = action.payload.email; // đăng ký xong tự đăng nhập
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.currentEmail = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export const selectCurrentUser = (s) =>
  s.auth.users.find((u) => u.email === s.auth.currentEmail) ?? null;
export default authSlice.reducer;
