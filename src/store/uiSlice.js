import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { authModal: null, notice: null }, // authModal: null | "login" | "register"
  reducers: {
    openAuth: (state, { payload = "login" }) => {
      state.authModal = payload;
    },
    closeAuth: (state) => {
      state.authModal = null;
    },
    showNotice: (state, { payload }) => {
      state.notice = payload;
    }, // { title, message, linkText, linkTo }
    closeNotice: (state) => {
      state.notice = null;
    },
  },
});

export const { openAuth, closeAuth, showNotice, closeNotice } = uiSlice.actions;
export default uiSlice.reducer;
