import ArticleCard from "../../../components/common/ArticleCard";
import styles from "../article.module.css";

export default function RelatedNews({ items }) {
  if (!items?.length) return null;
  return (
    <section className={styles.related}>
      <h2 className={styles.blockTitle}>TIN LIÊN QUAN</h2>
      <div className={styles.relatedGrid}>
        {items.map((a) => (
          <ArticleCard
            key={a.id}
            article={a}
            variant="vertical"
            size="sm"
            showCategory={false}
            showTime={false}
          />
        ))}
      </div>
    </section>
  );
}
