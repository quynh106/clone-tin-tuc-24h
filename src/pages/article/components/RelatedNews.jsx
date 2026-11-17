import ArticleCard from "../../../components/common/ArticleCard";
import styles from "../article.module.css";

export default function RelatedNews({ items }) {
  if (!items?.length) return null;
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sideTitle}>TIN LIÊN QUAN</h2>
      {items.map((a) => (
        <ArticleCard
          key={a.id}
          article={a}
          variant="horizontal"
          size="sm"
          showCategory={false}
        />
      ))}
    </aside>
  );
}
