import ArticleCard from "./ArticleCard";
import SectionTitle from "./SectionTitle";
import styles from "./SidebarList.module.css";

// Danh sách tin cột phải: các tin đầu có ảnh nhỏ, phần còn lại chỉ có tiêu đề.
export default function SidebarList({ title, articles = [], withThumb = 3, to, maxItems = 8 }) {
  const visibleArticles = articles.filter((article) => article?.id && article?.title).slice(0, maxItems);
  if (visibleArticles.length === 0) return null;

  return (
    <aside className={styles.box} aria-label={title || "Tin liên quan"}>
      {title && <SectionTitle title={title} to={to} />}
      <ul className={styles.list}>
        {visibleArticles.map((article, index) => (
          <li key={article.id} className={styles.item}>
            {index < withThumb ? (
              <ArticleCard article={article} variant="horizontal" size="sm" showCategory={false} showTime={false} />
            ) : (
              <ArticleCard article={article} variant="text" showTime={false} />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
