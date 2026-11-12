import { Link } from "react-router-dom";
import ArticleCard from "../../../components/common/ArticleCard";
import { ArticleLink, ArticleImage } from "../../../components/common/ArticleParts";
import { BLOCKS } from "../homeBlocks";
import styles from "./multiBox.module.css";

function Sma({ a }) {
  return (
    <article className={styles.sma}>
      <figure className={styles.smaBg}>
        <ArticleLink article={a}><ArticleImage article={a} /></ArticleLink>
      </figure>
      <h3 className={styles.smaTit}><ArticleLink article={a}>{a.title}</ArticleLink></h3>
    </article>
  );
}

function NoImg({ list }) {
  return (
    <div className={styles.noImg}>
      {list.map((a) => <ArticleCard key={a.id} article={a} variant="text" />)}
    </div>
  );
}

// Cần 10 bài: 1 lớn + 3 nhỏ (hàng 1) + 2 x (1 nhỏ + 2 chữ) (hàng 2)
export default function MultiBox({ slug, articles = [], beauty = false }) {
  const block = BLOCKS[slug];
  if (!block || articles.length < 4) return null;
  const [big, a1, a2, a3, b1, b2, b3, c1, c2, c3] = articles;
  return (
    <section className={styles.box}>
      <div className={styles.head}>
        <h2 className={styles.tit}><Link to={block.to}>{block.title.toLocaleUpperCase("vi-VN")}</Link></h2>
        <ul className={styles.cate}>
          {block.tabs.map((t) => <li key={t.label}><Link to={t.to}>{t.label}</Link></li>)}
        </ul>
      </div>
      <div className={`${styles.body} ${beauty ? styles.beauty : ""}`}>
        <div className={styles.row}>
          <div className={styles.col350}>
            <article>
              <figure className={styles.bigBg}>
                <ArticleLink article={big}><ArticleImage article={big} /></ArticleLink>
              </figure>
              <h3 className={styles.bigTit}><ArticleLink article={big}>{big.title}</ArticleLink></h3>
            </article>
          </div>
          <div className={styles.colR}>
            {[a1, a2, a3].filter(Boolean).map((a) => <Sma key={a.id} a={a} />)}
          </div>
        </div>
        {b1 && (
          <div className={`${styles.row} ${styles.row2}`}>
            <div className={styles.col350}>
              <Sma a={b1} />
              <NoImg list={[b2, b3].filter(Boolean)} />
            </div>
            <div className={styles.colR}>
              {c1 && <Sma a={c1} />}
              <NoImg list={[c2, c3].filter(Boolean)} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
