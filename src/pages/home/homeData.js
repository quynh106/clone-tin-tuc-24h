// Hàm thuần xử lý dữ liệu trang chủ (không có JSX).

// Gộp nhiều danh sách (nhiều feed) -> bỏ trùng theo id -> mới nhất lên đầu.
export function mergeArticles(lists) {
  const seen = new Map();
  lists.flat().forEach((a) => {
    if (a && !seen.has(a.id)) seen.set(a.id, a);
  });
  return [...seen.values()].sort((a, b) => (Date.parse(b.pubDate) || 0) - (Date.parse(a.pubDate) || 0));
}

export function groupByCategory(articles) {
  return articles.reduce((acc, a) => {
    (acc[a.categorySlug] ||= []).push(a);
    return acc;
  }, {});
}

// Lấy n bài đầu của chuyên mục `slug` (bắt đầu từ vị trí `from`).
export function take(byCategory, slug, n, from = 0) {
  return (byCategory[slug] ?? []).slice(from, from + n);
}

export function buildHomeData(articles) {
  const sorted = mergeArticles([articles]);
  return {
    // Hero: 1 tin lớn, 3 tin nhỏ, danh sách cuộn bên cạnh
    main: sorted[0] ?? null,
    subs: sorted.slice(1, 4),
    list: sorted.slice(4, 16),
    byCategory: groupByCategory(sorted),
  };
}
