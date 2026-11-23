import { useState } from "react";
import ArticleCard from "../../../components/common/ArticleCard";
import SidebarList from "../../../components/common/SidebarList";
import SectionTitle from "../../../components/common/SectionTitle";
import { useFeed } from "../../../hooks/useFeed";
import styles from "../article.module.css";

function HotNews({ currentId }) {
  const { status, data } = useFeed("tintuctrongngay");
  const [extra, setExtra] = useState(5);
  if (status !== "success") return null;

  const all = data.filter((a) => a.id !== currentId);
  if (all.length === 0) return null;
  const top = all.slice(0, 5);
  const list = all.slice(5, 5 + extra);
  const hasMore = 5 + extra < all.length;

  return (
    <section className={styles.bottomBlock}>
      <SectionTitle title="Tin nổi bật" size="md" />
      <div className={styles.hotTop}>
        {top[0] && <ArticleCard article={top[0]} variant="overlay" showSummary={false} />}
        {top[1] && <ArticleCard article={top[1]} variant="vertical" showSummary showCategory={false} />}
      </div>
      <div className={styles.hotTopRow}>
        {top.slice(2).map((a) => (
          <ArticleCard key={a.id} article={a} variant="vertical" size="sm" showCategory={false} showTime={false} />
        ))}
      </div>
      <div className={styles.hotList}>
        {list.map((a) => (
          <ArticleCard key={a.id} article={a} variant="horizontal" showSummary showCategory={false} />
        ))}
      </div>
      {hasMore && (
        <div className={styles.moreWrap}>
          <button type="button" className={styles.moreBtn} onClick={() => setExtra((n) => n + 5)}>
            + Xem thêm tin mới
          </button>
        </div>
      )}
    </section>
  );
}

function ThemeBlock({ title, feed }) {
  const { status, data } = useFeed(feed);
  if (status !== "success" || data.length < 4) return null;
  return (
    <section className={styles.bottomBlock}>
      <SectionTitle title={title} size="md" />
      <div className={styles.themeGrid}>
        <ArticleCard article={data[0]} variant="overlay" showCategory={false} />
        <div className={styles.themeSide}>
          {data.slice(1, 4).map((a) => (
            <ArticleCard key={a.id} article={a} variant="horizontal" size="sm" showCategory={false} showTime={false} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ArticleBottom({ currentId }) {
  const popular = useFeed("trangchu24h");
  const popularItems =
    popular.status === "success"
      ? popular.data.filter((a) => a.id !== currentId)
      : [];

  return (
    <>
      {popularItems.length > 0 && (
        <section className={styles.bottomBlock}>
          <SidebarList title="Nhiều người đọc" articles={popularItems} withThumb={3} maxItems={8} />
        </section>
      )}
      <HotNews currentId={currentId} />
      <ThemeBlock title="Làm đẹp" feed="lamdep" />
    </>
  );
}