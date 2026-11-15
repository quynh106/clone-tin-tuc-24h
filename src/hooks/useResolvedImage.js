import { useEffect, useState } from "react";
import { resolveArticleImage } from "../services/articleImage";

// Truyền url bài viết để lấy ảnh đại diện; truyền null/"" thì không làm gì và trả về "".
export function useResolvedImage(url) {
  const [state, setState] = useState({ url: null, image: "" });

  useEffect(() => {
    if (!url) return undefined;
    let ignore = false;
    resolveArticleImage(url).then((image) => {
      if (!ignore) setState({ url, image });
    });
    return () => {
      ignore = true;
    };
  }, [url]);

  return url && state.url === url ? state.image : "";
}
