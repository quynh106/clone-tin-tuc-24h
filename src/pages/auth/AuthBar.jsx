import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentUser } from "../../store/authSlice";

export default function AuthBar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector(selectCurrentUser);
  const link = { color: "#51ae5a", textDecoration: "none", fontWeight: 600 };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: 16,
        padding: "6px 16px",
        fontSize: 13,
        background: "#f7f7f7",
        borderBottom: "1px solid #eee",
      }}
    >
      {user ? (
        <>
          <span>
            Xin chào, <b>{user.name}</b>
          </span>
          <Link to="/bai-da-luu" style={link}>
            Bài đã lưu
          </Link>
          <button
            type="button"
            onClick={() => dispatch(logout())}
            style={{
              border: 0,
              background: "none",
              cursor: "pointer",
              color: "#888",
            }}
          >
            Đăng xuất
          </button>
        </>
      ) : (
        <>
          <Link to="/dang-nhap" state={{ from: location }} style={link}>
            Đăng nhập
          </Link>
          <Link to="/dang-ky" state={{ from: location }} style={link}>
            Đăng ký
          </Link>
        </>
      )}
    </div>
  );
}
