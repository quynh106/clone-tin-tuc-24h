import styles from "./Status.module.css";

export default function Loading({ text = "Đang tải tin tức..." }) {
  return <div className={styles.box} role="status">{text}</div>;
}
