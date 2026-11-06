export function parseArticleUrl(url = "") {
  const m = String(url).match(/-c(\d+)a(\d+)\.html/);
  return m
    ? { categoryId: m[1], articleId: m[2] }
    : { categoryId: null, articleId: null };
}
