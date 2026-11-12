import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFeed } from "../store/feedSlice";

export function useFeed(feed) {
  const dispatch = useDispatch();
  const entry = useSelector((s) => s.feed.byFeed[feed]);

  useEffect(() => {
    if (feed) dispatch(loadFeed(feed));
  }, [feed, dispatch]);

  return entry ?? { status: "loading", data: [], error: null };
}
