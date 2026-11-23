import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../store/feedSlice";
import authReducer from "../store/authSlice";
import savedReducer from "../store/savedSlice";

export const store = configureStore({
  reducer: { feed: feedReducer, auth: authReducer, saved: savedReducer },
});

// Mỗi khi state đổi thì ghi auth và saved vào localStorage
store.subscribe(() => {
  const { auth, saved } = store.getState();
  try {
    localStorage.setItem("auth", JSON.stringify(auth));
    localStorage.setItem("saved", JSON.stringify(saved.byUser));
  } catch {
    /* hết dung lượng hoặc bị chặn thì bỏ qua */
  }
});
