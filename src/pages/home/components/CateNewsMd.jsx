import ArticleCard from "../../../components/common/ArticleCard";
import SectionTitle from "../../../components/common/SectionTitle";
import { ArticleLink, ArticleImage } from "../../../components/common/ArticleParts";
import { BLOCKS } from "../homeBlocks";
import styles from "./cateNewsMd.module.css";

// Tiêu đề 16px + nút xám, 1 tin lớn (ảnh trên) + 4 tin chữ có kẻ.
export default function CateNewsMd({ slug, articles = [] }) {
  const block = BLOCKS[slug];
  if (!block || articles.length === 0) return null;
  const [big, ...rest] = articles;
  return (
    <section className={styles.block}>
      <SectionTitle title={block.title} to={block.to} tabs={block.tabs} size="md" />
      <article className={styles.big}>
        <figure className={styles.bigImg}>
          <ArticleLink article={big}><ArticleImage article={big} /></ArticleLink>
        </figure>
        <h3 className={styles.bigTit}><ArticleLink article={big}>{big.title}</ArticleLink></h3>
        <p className={styles.bigSum}>{big.summary}</p>
      </article>
      <div>
        {rest.slice(0, 4).map((a) => (
          <div key={a.id} className={styles.row}>
            <ArticleCard article={a} variant="text" />
          </div>
        ))}
      </div>
    </section>
  );
}
