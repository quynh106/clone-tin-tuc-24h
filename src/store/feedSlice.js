import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFeed } from "../services/rssClient";

export const loadFeed = createAsyncThunk("feed/load", (feed) =>
  fetchFeed(feed),
);

const feedSlice = createSlice({
  name: "feed",
  initialState: { byFeed: {} }, // { bongda: { status, data, error } }
  extraReducers: (builder) => {
    builder
      .addCase(loadFeed.pending, (state, action) => {
        const key = action.meta.arg;
        if (state.byFeed[key]?.status !== "success") {
          state.byFeed[key] = { status: "loading", data: [], error: null };
        }
      })
      .addCase(loadFeed.fulfilled, (state, action) => {
        state.byFeed[action.meta.arg] = {
          status: "success",
          data: action.payload,
          error: null,
        };
      })
      .addCase(loadFeed.rejected, (state, action) => {
        state.byFeed[action.meta.arg] = {
          status: "error",
          data: [],
          error: action.error.message,
        };
      });
  },
});

export default feedSlice.reducer;
