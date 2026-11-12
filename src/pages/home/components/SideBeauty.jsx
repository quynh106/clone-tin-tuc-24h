import { ArticleLink, ArticleImage } from "../../../components/common/ArticleParts";
import styles from "./sideBeauty.module.css";

export default function SideBeauty({ articles = [] }) {
  if (articles.length === 0) return null;
  const [first, ...rest] = articles;
  return (
    <section className={styles.dcpd}>
      <header className={styles.head}><a href="#dep">DÀNH RIÊNG CHO PHÁI ĐẸP</a></header>
      <div className={styles.list}>
        <article className={styles.first}>
          <span className={styles.thumb}>
            <ArticleLink article={first}><ArticleImage article={first} /></ArticleLink>
          </span>
          <h3><ArticleLink article={first}>{first.title}</ArticleLink></h3>
        </article>
        {rest.slice(0, 3).map((a) => (
          <article key={a.id} className={styles.other}>
            <ArticleLink article={a}>{a.title}</ArticleLink>
          </article>
        ))}
        <div className={styles.pager}>
          <span className={styles.arrow} />
          <span className={styles.numb}>1/3</span>
          <span className={`${styles.arrow} ${styles.right}`} />
        </div>
      </div>
    </section>
  );
}
