import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeNotice } from "../../store/uiSlice";
import styles from "./auth.module.css";

export default function NoticeModal() {
  const notice = useSelector((s) => s.ui.notice);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!notice) return;
    const onKey = (e) => e.key === "Escape" && dispatch(closeNotice());
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [notice, dispatch]);

  if (!notice) return null;
  const close = () => dispatch(closeNotice());

  return (
    <div
      className={styles.overlay}
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <div
        className={`${styles.dialog} ${styles.notice}`}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.logo}>
          24<span>h</span>
        </div>
        <h3>{notice.title}</h3>
        <p>
          {notice.message}{" "}
          {notice.linkText && (
            <Link to={notice.linkTo} onClick={close}>
              {notice.linkText}
            </Link>
          )}
        </p>
        <button
          type="button"
          className={styles.primary}
          style={{ width: "100%" }}
          onClick={close}
        >
          Đồng ý
        </button>
      </div>
    </div>
  );
}
