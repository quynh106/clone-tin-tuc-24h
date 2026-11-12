import { ArticleLink, ArticleImage } from "../../../components/common/ArticleParts";
import styles from "./marketNews.module.css";

export default function MarketNews({ title = "Tin tức thị trường", articles = [] }) {
  if (articles.length === 0) return null;
  return (
    <section className={styles.tttt}>
      <header className={styles.tit}>
        <h2>{title.toLocaleUpperCase("vi-VN")}</h2>
      </header>
      <div className={styles.row}>
        {articles.slice(0, 4).map((a) => (
          <article key={a.id} className={styles.item}>
            <figure className={styles.img}>
              <ArticleLink article={a}><ArticleImage article={a} /></ArticleLink>
            </figure>
            <h3 className={styles.name}><ArticleLink article={a}>{a.title}</ArticleLink></h3>
          </article>
        ))}
      </div>
    </section>
  );
}
