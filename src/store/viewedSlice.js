import { createSlice } from "@reduxjs/toolkit";

const load = () => {
  try {
    return JSON.parse(localStorage.getItem("viewed")) ?? {};
  } catch {
    return {};
  }
};

const viewedSlice = createSlice({
  name: "viewed",
  initialState: { byUser: load() },
  reducers: {
    addViewed(state, { payload: { email, article } }) {
      const rest = (state.byUser[email] ?? []).filter(
        (a) => a.id !== article.id,
      );
      state.byUser[email] = [article, ...rest].slice(0, 50); // giữ tối đa 50 bài
    },
    clearViewed(state, { payload: email }) {
      state.byUser[email] = [];
    },
  },
});

export const { addViewed, clearViewed } = viewedSlice.actions;
export default viewedSlice.reducer;
