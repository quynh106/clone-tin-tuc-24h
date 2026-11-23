import SidebarList from "../../../components/common/SidebarList";
import { useFeed } from "../../../hooks/useFeed";
import styles from "../article.module.css";

function FeedBlock({ title, feed, to, currentId, maxItems = 4 }) {
  const { status, data } = useFeed(feed);
  if (status !== "success") return null;
  const items = data.filter((a) => a.id !== currentId);
  return (
    <div className={styles.sideBlock}>
      <SidebarList
        title={title}
        articles={items}
        withThumb={maxItems}
        maxItems={maxItems}
        to={to}
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
        currentId={currentId}
      />
    </aside>
  );
}
