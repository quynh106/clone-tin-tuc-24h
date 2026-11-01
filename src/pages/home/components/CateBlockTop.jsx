import ArticleCard from "../../../components/common/ArticleCard";
import SectionTitle from "../../../components/common/SectionTitle";
import { ArticleLink, ArticleImage } from "../../../components/common/ArticleParts";
import { BLOCKS } from "../homeBlocks";
import styles from "./cateTop.module.css";

/**
 * layout="grid":  1 tin lớn (ảnh trái) + 3 tin ảnh + 2 tin chữ
 * layout="list":  1 tin lớn (ảnh trên) + danh sách tin chữ bên phải (coll-2)
 */
export default function CateBlockTop({ slug, articles = [], layout = "grid" }) {
  const block = BLOCKS[slug];
  if (!block || articles.length === 0) return null;
  const [big, ...rest] = articles;

  return (
    <section className={styles.block}>
      <SectionTitle title={block.title} to={block.to} tabs={block.tabs} size="lg" />

      {layout === "grid" ? (
        <>
          <article className={styles.big}>
            <figure className={styles.bigImg}>
              <ArticleLink article={big}><ArticleImage article={big} /></ArticleLink>
            </figure>
            <div className={styles.bigInfo}>
              <h3 className={styles.bigTit}><ArticleLink article={big}>{big.title}</ArticleLink></h3>
              <p className={styles.bigSum}>{big.summary}</p>
            </div>
          </article>
          <div className={styles.threeCol}>
            {rest.slice(0, 3).map((a) => (
              <article key={a.id}>
                <figure className={styles.smaImg}>
                  <ArticleLink article={a}><ArticleImage article={a} /></ArticleLink>
                </figure>
                <h3 className={styles.smaTit}><ArticleLink article={a}>{a.title}</ArticleLink></h3>
              </article>
            ))}
          </div>
          <div className={styles.twoCol}>
            {rest.slice(3, 5).map((a) => (
              <ArticleCard key={a.id} article={a} variant="text" />
            ))}
          </div>
        </>
      ) : (
        <div className={styles.listLayout}>
          <article>
            <figure className={`${styles.bigImg} ${styles.bigImgList}`}>
              <ArticleLink article={big}><ArticleImage article={big} /></ArticleLink>
            </figure>
            <h3 className={styles.bigTit}><ArticleLink article={big}>{big.title}</ArticleLink></h3>
            <p className={styles.bigSum}>{big.summary}</p>
          </article>
          <div className={styles.textList}>
            {rest.slice(0, 4).map((a) => (
              <div key={a.id} className={styles.textRow}>
                <ArticleCard article={a} variant="text" />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
