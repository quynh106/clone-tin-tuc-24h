import ArticleCard from "../../../components/common/ArticleCard";
import SidebarList from "../../../components/common/SidebarList";
import SectionTitle from "../../../components/common/SectionTitle";
import { useFeed } from "../../../hooks/useFeed";
import styles from "../article.module.css";

export default function ArticleBottom({ currentId }) {
  const hot = useFeed("tintuctrongngay");
  const popular = useFeed("trangchu24h");

  const hotItems =
    hot.status === "success"
      ? hot.data.filter((a) => a.id !== currentId).slice(0, 8)
      : [];
  const popularItems =
    popular.status === "success"
      ? popular.data.filter((a) => a.id !== currentId)
      : [];

  return (
    <>
      {popularItems.length > 0 && (
        <section className={styles.bottomBlock}>
          <SidebarList
            title="Nhiều người đọc"
            articles={popularItems}
            withThumb={3}
            maxItems={8}
          />
        </section>
      )}
      {hotItems.length > 0 && (
        <section className={styles.bottomBlock}>
          <SectionTitle title="Tin nổi bật" size="md" />
          <div className={styles.hotList}>
            {hotItems.map((a) => (
              <ArticleCard
                key={a.id}
                article={a}
                variant="horizontal"
                showSummary
                showCategory={false}
              />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
