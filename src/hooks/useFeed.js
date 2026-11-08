import { useEffect, useState } from "react";
import { fetchFeed } from "../services/rssClient";

export function useFeed(feed) {
  // Lưu kèm tên feed để biết kết quả đã tải thuộc feed nào, không cần setState đồng bộ trong effect.
  const [result, setResult] = useState({ feed: null, data: [], error: null });

  useEffect(() => {
    let ignore = false;
    fetchFeed(feed)
      .then((data) => !ignore && setResult({ feed, data, error: null }))
      .catch((error) => !ignore && setResult({ feed, data: [], error }));
    return () => {
      ignore = true; // tránh set state khi đã chuyển trang
    };
  }, [feed]);

  if (result.feed !== feed) return { status: "loading", data: [], error: null };
  if (result.error) return { status: "error", data: [], error: result.error };
  return { status: "success", data: result.data, error: null };
}
