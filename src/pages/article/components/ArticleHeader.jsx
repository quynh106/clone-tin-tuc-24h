import { useState } from "react";
import { Link } from "react-router-dom";
import { formatLongDate } from "../../../utils/formatDate";
import styles from "../article.module.css";

export default function ArticleHeader({ article, category }) {
  const [copied, setCopied] = useState(false);
  const name = category?.name ?? article.categoryName ?? "Tin tức";

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* trình duyệt chặn clipboard thì bỏ qua */
    }
  };

  return (
    <header>
      <div className={styles.metaBar}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Trang chủ</Link>
          <span className={styles.sep}>|</span>
          {category ? (
            <Link to={category.path} className={styles.current}>
              {name}
            </Link>
          ) : (
            <span className={styles.current}>{name}</span>
          )}
        </nav>
        <time className={styles.date} dateTime={article.pubDate || undefined}>
          {formatLongDate(article.pubDate)}
        </time>
      </div>

      <h1 className={styles.title}>{article.title}</h1>

      <div className={styles.actionBar}>
        <div className={styles.event}>
          Sự kiện: <span className={styles.tag}>{name}</span>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btnSave}>
            LƯU BÀI
          </button>
          <button type="button" className={styles.btnShare} onClick={share}>
            {copied ? "ĐÃ CHÉP LINK" : "CHIA SẺ"}
          </button>
        </div>
      </div>
    </header>
  );
}
