import { Link } from "react-router-dom";
import ArticleCard from "../../../components/common/ArticleCard";
import { ArticleLink, ArticleImage } from "../../../components/common/ArticleParts";
import { BLOCKS } from "../homeBlocks";
import styles from "./entertainment.module.css";

export default function EntertainmentBox({ articles = [] }) {
  const block = BLOCKS["giai-tri"];
  if (articles.length === 0) return null;
  const [big, ...rest] = articles;
  return (
    <section className={styles.etm}>
      <div className={styles.head}>
        <span className={styles.ava} aria-hidden="true">★</span>
        <h2 className={styles.tit}><Link to={block.to}>GIẢI TRÍ</Link></h2>
        <ul className={styles.cate}>
          {block.tabs.map((t) => (
            <li key={t.label}><Link to={t.to}>{t.label.toLocaleUpperCase("vi-VN")}</Link></li>
          ))}
        </ul>
      </div>
      <div className={styles.body}>
        <article className={styles.big}>
          <figure className={styles.bigBg}>
            <ArticleLink article={big}><ArticleImage article={big} /></ArticleLink>
          </figure>
          <h3 className={styles.bigTit}><ArticleLink article={big}>{big.title}</ArticleLink></h3>
        </article>
        <div className={styles.right}>
          <div className={styles.smaGrid}>
            {rest.slice(0, 4).map((a) => (
              <article key={a.id} className={styles.sma}>
                <figure className={styles.smaBg}>
                  <ArticleLink article={a}><ArticleImage article={a} /></ArticleLink>
                </figure>
                <h3 className={styles.smaTit}><ArticleLink article={a}>{a.title}</ArticleLink></h3>
              </article>
            ))}
          </div>
          <div className={styles.noImg}>
            {rest.slice(4, 8).map((a) => (
              <ArticleCard key={a.id} article={a} variant="text" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
