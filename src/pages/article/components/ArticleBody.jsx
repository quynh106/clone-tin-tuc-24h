import { ArticleImage } from "../../../components/common/ArticleParts";
import styles from "../article.module.css";

export default function ArticleBody({ article }) {
  return (
    <div>
      {article.summary && <p className={styles.sapo}>{article.summary}</p>}
      <ArticleImage
        article={article}
        className={styles.heroImg}
        loading="eager"
      />
      <a
        className={styles.sourceBtn}
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        Đọc bài gốc trên 24h
      </a>
    </div>
  );
}
