import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../../components/common/ArticleCard";
import { useSaveArticle } from "../../hooks/useSaveArticle";
import { selectCurrentUser } from "../../store/authSlice";
import { clearSaved } from "../../store/savedSlice";
import { clearViewed } from "../../store/viewedSlice";
import { showNotice } from "../../store/uiSlice";
import AccountLayout from "./AccountLayout";
import styles from "./account.module.css";

const EMPTY = [];

function ArticleRow({ article }) {
  const dispatch = useDispatch();
  const { saved, toggle } = useSaveArticle(article);

  const share = async () => {
    try {
      await navigator.clipboard.writeText(article.url);
      dispatch(showNotice({ title: "Đã chép liên kết bài viết" }));
    } catch {
      /* clipboard bị chặn thì bỏ qua */
    }
  };

  return (
    <div className={styles.row}>
      <ArticleCard
        article={article}
        variant="horizontal"
        showSummary
        showCategory={false}
        showTime={false}
      />
      <div className={styles.rowActions}>
        <button type="button" className={styles.btnSm} onClick={toggle}>
          {saved ? "Bỏ lưu bài" : "Lưu bài"}
        </button>
        <button
          type="button"
          className={`${styles.btnSm} ${styles.btnSmGreen}`}
          onClick={share}
        >
          Chia sẻ
        </button>
      </div>
    </div>
  );
}

export default function ArticleListPage({ kind }) {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const isSaved = kind === "saved";
  const list = useSelector((s) =>
    user
      ? (s[isSaved ? "saved" : "viewed"].byUser[user.email] ?? EMPTY)
      : EMPTY,
  );
  const [cat, setCat] = useState("");

  const cats = [...new Set(list.map((a) => a.categoryName).filter(Boolean))];
  const shown =
    cat && cats.includes(cat)
      ? list.filter((a) => a.categoryName === cat)
      : list;

  const clearAll = () => {
    const msg = isSaved
      ? "Bỏ lưu toàn bộ bài viết?"
      : "Xóa toàn bộ bài viết đã xem?";
    if (!window.confirm(msg)) return;
    dispatch(isSaved ? clearSaved(user.email) : clearViewed(user.email));
  };

  return (
    <AccountLayout title={isSaved ? "Tin bài đã lưu" : "Tin bài đã xem"}>
      {list.length > 0 && (
        <div className={styles.toolbar}>
          <div className={styles.pills}>
            <button
              type="button"
              className={`${styles.pill} ${!cat ? styles.on : ""}`}
              onClick={() => setCat("")}
            >
              Tất cả
            </button>
            {cats.map((c) => (
              <button
                key={c}
                type="button"
                className={`${styles.pill} ${cat === c ? styles.on : ""}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <button type="button" className={styles.clearAll} onClick={clearAll}>
            {isSaved
              ? "(Bỏ lưu toàn bộ bài viết)"
              : "(Xóa toàn bộ bài viết đã xem)"}
          </button>
        </div>
      )}
      {list.length === 0 && (
        <p className={styles.empty}>
          {isSaved
            ? "Bạn chưa lưu bài viết nào."
            : "Bạn chưa xem bài viết nào."}
        </p>
      )}
      {shown.map((a) => (
        <ArticleRow key={a.id} article={a} />
      ))}
    </AccountLayout>
  );
}
