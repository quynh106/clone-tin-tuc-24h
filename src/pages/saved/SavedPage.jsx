import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../../components/common/ArticleCard";
import { selectCurrentUser } from "../../store/authSlice";
import { toggleSave } from "../../store/savedSlice";

export default function SavedPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const list = useSelector((s) =>
    user ? (s.saved.byUser[user.email] ?? []) : [],
  );

  if (!user) {
    return (
      <main style={{ maxWidth: 700, margin: "40px auto", padding: "0 16px" }}>
        <p>
          Bạn cần{" "}
          <Link to="/dang-nhap" state={{ from: { pathname: "/bai-da-luu" } }}>
            đăng nhập
          </Link>{" "}
          để xem bài đã lưu.
        </p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 800, margin: "32px auto", padding: "0 16px" }}>
      <h1 style={{ color: "#51ae5a", fontSize: 22 }}>
        BÀI ĐÃ LƯU ({list.length})
      </h1>
      {list.length === 0 && (
        <p>Chưa có bài nào. Bấm "LƯU BÀI" ở trang bài viết để lưu.</p>
      )}
      {list.map((a) => (
        <div
          key={a.id}
          style={{ padding: "14px 0", borderBottom: "1px solid #ededed" }}
        >
          <ArticleCard
            article={a}
            variant="horizontal"
            showSummary
            showCategory={false}
          />
          <button
            type="button"
            onClick={() =>
              dispatch(toggleSave({ email: user.email, article: a }))
            }
            style={{ marginTop: 8, cursor: "pointer" }}
          >
            Bỏ lưu
          </button>
        </div>
      ))}
    </main>
  );
}
