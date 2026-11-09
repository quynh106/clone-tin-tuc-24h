import { useEffect, useMemo, useState } from "react";
import mockArticles from "../../mocks/articles.json";
import snapshot from "../../mocks/homeSnapshot.json";
import widgets from "../../mocks/widgets.json";
import { fetchFeed } from "../../services/rssClient";
import { groupByCategory } from "./homeData";
import { HOME_FEEDS, toHomeArticle } from "./homeCategories";

// Độ ưu tiên nguồn: RSS thật (mới nhất) > bản chụp trang chủ 24h (có ảnh thật) > dữ liệu mẫu.
// Trong mỗi chuyên mục, bài có ảnh được xếp trước để khối nào cũng đủ ảnh.
function buildData(rssArticles) {
  const rss = rssArticles
    .filter((a) => a?.title)
    .sort((a, b) => (Date.parse(b.pubDate) || 0) - (Date.parse(a.pubDate) || 0));

  const seen = new Set();
  const ordered = [...rss, ...snapshot.articles.map((a) => toHomeArticle(a)), ...mockArticles]
    .filter((a) => {
      const key = String(a.id);
      if (!a.categorySlug || seen.has(key)) return false;
      seen.add(key);
      return true;
    });

  const hasImage = (a) => Boolean(a.image);
  const byCategory = Object.fromEntries(
    Object.entries(groupByCategory(ordered)).map(([slug, list]) => [
      slug,
      [...list.filter(hasImage), ...list.filter((a) => !hasImage(a))],
    ]),
  );

  // Hero luôn lấy bài có ảnh.
  const withImage = ordered.filter(hasImage);
  return {
    main: withImage[0] ?? ordered[0] ?? null,
    subs: withImage.slice(1, 4),
    list: ordered.filter((a) => a !== withImage[0] && !withImage.slice(1, 4).includes(a)).slice(0, 12),
    byCategory,
    widgets: {
      ...widgets,
      shorts: snapshot.shorts.length ? snapshot.shorts : widgets.shorts,
      social: snapshot.social.length ? snapshot.social : widgets.social,
    },
  };
}

// Trả về { status, error, data } như cũ. Trang hiện ngay dữ liệu có sẵn,
// RSS tải xong sẽ tự thay bằng tin mới + ảnh đúng từng bài.
export default function useHomeData() {
  const [rssArticles, setRssArticles] = useState([]);

  useEffect(() => {
    let ignore = false;
    Promise.allSettled(HOME_FEEDS.map(({ feed }) => fetchFeed(feed))).then((results) => {
      if (ignore) return;
      const articles = results.flatMap((result, i) =>
        result.status === "fulfilled"
          ? result.value.map((a) => toHomeArticle(a, HOME_FEEDS[i].slug))
          : [],
      );
      setRssArticles(articles);
    });
    return () => {
      ignore = true;
    };
  }, []);

  const data = useMemo(() => buildData(rssArticles), [rssArticles]);
  return { status: "success", error: null, data };
}
