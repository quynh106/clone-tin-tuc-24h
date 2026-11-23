import { Link } from "react-router-dom";
import SidebarList from "../../../components/common/SidebarList";
import { useFeed } from "../../../hooks/useFeed";
import styles from "../article.module.css";

function FeedBlock({ title, feed, to, currentId, maxItems = 4 }) {
  const { status, data } = useFeed(feed);
  if (status !== "success") return null;
  const items = data.filter((a) => a.id !== currentId);
  return (
    <div className={styles.sideBlock}>
      {to && (
        <Link to={to} className={styles.sideMore}>
          Xem thêm ›
        </Link>
      )}
      <SidebarList
        title={title}
        articles={items}
        withThumb={maxItems}
        maxItems={maxItems}
      />
    </div>
  );
}

export default function ArticleSidebar({ currentId }) {
  return (
    <aside className={styles.sidebar}>
      <FeedBlock
        title="Tin tức thị trường"
        feed="taichinhbatdongsan"
        to="/kinh-doanh-c161.html"
        currentId={currentId}
      />
      <FeedBlock
        title="An ninh - Hình sự"
        feed="anninhhinhsu"
        to="/an-ninh-hinh-su-c51.html"
        currentId={currentId}
      />
    </aside>
  );
}
