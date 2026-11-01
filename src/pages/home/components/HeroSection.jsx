import { ArticleLink, ArticleImage } from "../../../components/common/ArticleParts";
import styles from "./hero.module.css";

export default function HeroSection({ main, subs = [], list = [] }) {
  if (!main) return null;

  return (
    <section className={styles.hero} aria-label="Tin nổi bật">
      <div className={styles.colImg}>
        <article className={styles.big}>
          <figure className={styles.bigImg}>
            <ArticleLink article={main}><ArticleImage article={main} loading="eager" /></ArticleLink>
          </figure>
          <h1 className={styles.bigTit}><ArticleLink article={main}>{main.title}</ArticleLink></h1>
          {main.summary && <p className={styles.bigSum}>{main.summary}</p>}
        </article>

        {subs.length > 0 && (
          <div className={styles.subs}>
            {subs.slice(0, 3).map((article) => (
              <article key={article.id}>
                <figure className={styles.subImg}>
                  <ArticleLink article={article}><ArticleImage article={article} /></ArticleLink>
                </figure>
                <h2 className={styles.subTit}><ArticleLink article={article}>{article.title}</ArticleLink></h2>
              </article>
            ))}
          </div>
        )}
      </div>

      {list.length > 0 && (
        <div className={styles.colList}>
          <div className={styles.scrollY}>
            <div className={styles.scrollList}>
              {list.map((article) => (
                <article key={article.id} className={styles.item}>
                  {article.categoryName && <span className={styles.itemCate}>{article.categoryName}</span>}
                  <h3 className={styles.itemTit}><ArticleLink article={article}>{article.title}</ArticleLink></h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      <aside className={styles.colAside} aria-label="Vị trí quảng cáo">
        <div className={styles.ad}>VỊ TRÍ QUẢNG CÁO</div>
      </aside>
    </section>
  );
}
