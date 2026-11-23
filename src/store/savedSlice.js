import { createSlice } from "@reduxjs/toolkit";

const load = () => {
  try {
    return JSON.parse(localStorage.getItem("saved")) ?? {};
  } catch {
    return {};
  }
};

const savedSlice = createSlice({
  name: "saved",
  initialState: { byUser: load() }, // { "a@gmail.com": [article, ...] }
  reducers: {
    toggleSave(state, { payload: { email, article } }) {
      const list = state.byUser[email] ?? [];
      const exists = list.some((a) => a.id === article.id);
      state.byUser[email] = exists
        ? list.filter((a) => a.id !== article.id)
        : [article, ...list];
    },
    clearSaved(state, { payload: email }) {
      state.byUser[email] = [];
    },
  },
});

export const { toggleSave, clearSaved } = savedSlice.actions;
export default savedSlice.reducer;
