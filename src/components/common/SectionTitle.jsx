import { Link } from "react-router-dom";
import styles from "./SectionTitle.module.css";

/** Tiêu đề khối tin. size="lg" dùng cho khối đầu trang, "md" cho khối cuối trang. */
export default function SectionTitle({ title, to, tabs = [], size = "lg" }) {
  if (!title) return null;

  const titleContent = to ? <Link to={to}>{title.toLocaleUpperCase("vi-VN")}</Link> : title.toLocaleUpperCase("vi-VN");
  const validTabs = tabs.filter((tab) => tab?.label && tab?.to);
  const tabList = validTabs.length > 0 ? (
    <ul className={size === "md" ? styles.pills : styles.tabs}>
      {validTabs.map((tab) => (
        <li key={`${tab.label}-${tab.to}`}><Link to={tab.to}>{tab.label}</Link></li>
      ))}
    </ul>
  ) : null;

  if (size === "md") {
    return <div className={styles.mdWrap}><h2 className={styles.mdTitle}>{titleContent}</h2>{tabList}</div>;
  }

  return <div className={styles.lgWrap}><h2 className={styles.lgTitle}>{titleContent}</h2>{tabList}</div>;
}
