import styles from "./ArticleCard.module.css";
import { timeAgo } from "./timeAgo";
import { ArticleLink, ArticleImage } from "./ArticleParts";

/**
 * Các kiểu thẻ tin dùng chung:
 * overlay: chữ nằm trên ảnh; vertical: ảnh trên/chữ dưới;
 * horizontal: ảnh trái/chữ phải; text: chỉ hiển thị tiêu đề.
 */
export default function ArticleCard({
  article,
  variant = "vertical",
  size = "md",
  showSummary = false,
  showCategory = true,
  showTime = true,
  className = "",
}) {
  if (!article?.title) return null;

  const time = showTime ? timeAgo(article.pubDate) : "";

  if (variant === "text") {
    return (
      <article className={`${styles.text} ${className}`.trim()}>
        <ArticleLink article={article} className={styles.textLink}>
          {article.title}
        </ArticleLink>
      </article>
    );
  }

  if (variant === "overlay") {
    return (
      <article className={`${styles.overlay} ${className}`.trim()}>
        <ArticleLink article={article} className={styles.overlayLink} aria-label={article.title}>
          <ArticleImage article={article} className={styles.overlayImg} loading="eager" />
          <div className={styles.overlayBody}>
            {showCategory && article.categoryName && <span className={styles.badge}>{article.categoryName}</span>}
            <h2 className={styles.overlayTitle}>{article.title}</h2>
            {showSummary && article.summary && <p className={styles.overlaySummary}>{article.summary}</p>}
            {time && <time className={styles.overlayTime} dateTime={article.pubDate || undefined}>{time}</time>}
          </div>
        </ArticleLink>
      </article>
    );
  }

  const isHorizontal = variant === "horizontal";
  const cardClass = [
    styles.card,
    isHorizontal ? styles.horizontal : styles.vertical,
    size === "sm" ? styles.small : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <article className={cardClass}>
      <ArticleLink article={article} className={styles.thumbLink} aria-label={article.title}>
        <ArticleImage article={article} className={styles.thumb} />
      </ArticleLink>
      <div className={styles.body}>
        {showCategory && article.categoryName && <span className={styles.category}>{article.categoryName}</span>}
        <h3 className={styles.title}><ArticleLink article={article}>{article.title}</ArticleLink></h3>
        {showSummary && article.summary && <p className={styles.summary}>{article.summary}</p>}
        {time && <time className={styles.time} dateTime={article.pubDate || undefined}>{time}</time>}
      </div>
    </article>
  );
}
