import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import mockArticles from "../../mocks/articles.json";
import snapshot from "../../mocks/homeSnapshot.json";
import widgets from "../../mocks/widgets.json";
import { loadFeed } from "../../store/feedSlice";
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
  const subs = withImage.slice(1, 4);
  return {
    main: withImage[0] ?? ordered[0] ?? null,
    subs,
    list: ordered.filter((a) => a !== withImage[0] && !subs.includes(a)).slice(0, 12),
    byCategory,
    widgets: {
      ...widgets,
      shorts: snapshot.shorts.length ? snapshot.shorts : widgets.shorts,
      social: snapshot.social.length ? snapshot.social : widgets.social,
    },
  };
}

/**
 * Dữ liệu trang chủ, lấy qua Redux (feedSlice của nhóm).
 * Trả về:
 *  - status: "loading" | "success" | "error"
 *      loading: các feed đang tải và chưa có gì để hiển thị
 *      error:   mọi feed đều lỗi (trang vẫn hiển thị dữ liệu chụp sẵn)
 *  - isFetching: còn feed đang tải (dùng cho dòng "đang cập nhật")
 *  - error: Error | null
 *  - data: { main, subs, list, byCategory, widgets }
 *  - retry: tải lại các feed
 */
export default function useHomeData() {
  const dispatch = useDispatch();
  const byFeed = useSelector((s) => s.feed.byFeed);

  const load = useCallback(() => {
    HOME_FEEDS.forEach(({ feed }) => dispatch(loadFeed(feed)));
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  const data = useMemo(() => {
    const rss = HOME_FEEDS.flatMap(({ feed, slug }) =>
      (byFeed[feed]?.data ?? []).map((a) => toHomeArticle(a, slug)),
    );
    return buildData(rss);
  }, [byFeed]);

  const entries = HOME_FEEDS.map(({ feed }) => byFeed[feed]);
  const isFetching = entries.some((e) => !e || e.status === "loading");
  const allFailed = entries.every((e) => e?.status === "error");

  return {
    status: allFailed ? "error" : "success",
    isFetching,
    error: allFailed
      ? new Error("Không tải được tin mới nhất. Đang hiển thị dữ liệu đã lưu.")
      : null,
    data,
    retry: load,
  };
}
