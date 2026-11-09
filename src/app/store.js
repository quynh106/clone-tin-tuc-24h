import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "../store/feedSlice";

export const store = configureStore({ reducer: { feed: feedReducer } });
