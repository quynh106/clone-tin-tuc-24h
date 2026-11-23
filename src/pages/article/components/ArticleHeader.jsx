import { useState } from "react";
import { Link } from "react-router-dom";
import { formatLongDate } from "../../../utils/formatDate";
import styles from "../article.module.css";

import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom"; // thay dòng import Link cũ
import { selectCurrentUser } from "../../../store/authSlice";
import { toggleSave } from "../../../store/savedSlice";

export default function ArticleHeader({ article, category }) {
  const [copied, setCopied] = useState(false);
  const name = category?.name ?? article.categoryName ?? "Tin tức";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector(selectCurrentUser);
  const saved = useSelector((s) =>
    user
      ? (s.saved.byUser[user.email] ?? []).some((a) => a.id === article.id)
      : false,
  );

  const save = () => {
    if (!user) return navigate("/dang-nhap", { state: { from: location } });
    dispatch(toggleSave({ email: user.email, article }));
  };

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* trình duyệt chặn clipboard thì bỏ qua */
    }
  };

  return (
    <header>
      <div className={styles.metaBar}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">Trang chủ</Link>
          <span className={styles.sep}>|</span>
          {category ? (
            <Link to={category.path} className={styles.current}>
              {name}
            </Link>
          ) : (
            <span className={styles.current}>{name}</span>
          )}
        </nav>
        <time className={styles.date} dateTime={article.pubDate || undefined}>
          {formatLongDate(article.pubDate)}
        </time>
      </div>

      <h1 className={styles.title}>{article.title}</h1>

      <div className={styles.actionBar}>
        <div className={styles.event}>
          Sự kiện: <span className={styles.tag}>{name}</span>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btnSave} onClick={save}>
            {saved ? "ĐÃ LƯU" : "LƯU BÀI"}
          </button>
          <button type="button" className={styles.btnShare} onClick={share}>
            {copied ? "ĐÃ CHÉP LINK" : "CHIA SẺ"}
          </button>
        </div>
      </div>
    </header>
  );
}
