import { Link } from "react-router-dom";
import ArticleCard from "../../../components/common/ArticleCard";
import { useFeed } from "../../../hooks/useFeed";
import styles from "../article.module.css";

function SideBlock({ title, feed, to, limit = 4 }) {
  const { status, data } = useFeed(feed);
  if (status !== "success" || !data.length) return null;
  return (
    <section className={styles.sideBlock}>
      <div className={styles.blockHead}>
        <h2 className={styles.blockTitle}>{title}</h2>
        {to && (
          <Link to={to} className={styles.more}>
            Xem thêm ›
          </Link>
        )}
      </div>
      {data.slice(0, limit).map((a) => (
        <ArticleCard
          key={a.id}
          article={a}
          variant="horizontal"
          size="sm"
          showCategory={false}
          showTime={false}
        />
      ))}
    </section>
  );
}

export default function ArticleSidebar() {
  return (
    <aside className={styles.sidebar}>
      <SideBlock
        title="TIN TỨC THỊ TRƯỜNG"
        feed="taichinhbatdongsan"
        to="/kinh-doanh-c161.html"
      />
      <SideBlock title="BÓNG ĐÁ" feed="bongda" to="/bong-da-c48.html" />
    </aside>
  );
}
