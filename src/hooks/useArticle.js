import { useEffect, useState } from "react";
import { getArticle, getRelated } from "../services/articleService";

// status: "loading" | "success" | "notfound" | "error"
export function useArticle(categoryId, articleId) {
  const [state, setState] = useState({
    status: "loading",
    article: null,
    related: [],
    error: null,
  });

  useEffect(() => {
    let ignore = false;
    setState({ status: "loading", article: null, related: [], error: null });
    Promise.all([
      getArticle(categoryId, articleId),
      getRelated(categoryId, articleId),
    ])
      .then(([article, related]) => {
        if (ignore) return;
        setState({
          status: article ? "success" : "notfound",
          article,
          related,
          error: null,
        });
      })
      .catch((error) => {
        if (!ignore)
          setState({ status: "error", article: null, related: [], error });
      });
    return () => {
      ignore = true;
    };
  }, [categoryId, articleId]);

  return state;
}
