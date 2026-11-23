import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../store/feedSlice";
import authReducer from "../store/authSlice";
import savedReducer from "../store/savedSlice";
import uiReducer from "../store/uiSlice";
import viewedReducer from "../store/viewedSlice";

export const store = configureStore({
  reducer: {
    feed: feedReducer,
    auth: authReducer,
    saved: savedReducer,
    ui: uiReducer,
    viewed: viewedReducer,
  },
});

// Mỗi khi state đổi thì ghi auth và saved vào localStorage
store.subscribe(() => {
  const { auth, saved, viewed } = store.getState();
  try {
    localStorage.setItem("auth", JSON.stringify(auth));
    localStorage.setItem("saved", JSON.stringify(saved.byUser));
    localStorage.setItem("viewed", JSON.stringify(viewed.byUser));
  } catch {
    /* hết dung lượng hoặc bị chặn thì bỏ qua */
  }
});
