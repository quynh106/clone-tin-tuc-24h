import styles from "./Status.module.css";

export default function ErrorBox({ message = "Không tải được dữ liệu.", onRetry }) {
  return (
    <div className={`${styles.box} ${styles.error}`} role="alert">
      <p>{message}</p>
      {onRetry && <button type="button" onClick={onRetry}>Tải lại</button>}
    </div>
  );
}
