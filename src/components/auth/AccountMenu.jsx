import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentUser } from "../../store/authSlice";
import { openAuth } from "../../store/uiSlice";
import Avatar from "./Avatar";
import styles from "./auth.module.css";

export default function AccountMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const savedCount = useSelector((s) =>
    user ? (s.saved.byUser[user.email] ?? []).length : 0,
  );
  const viewedCount = useSelector((s) =>
    user ? (s.viewed.byUser[user.email] ?? []).length : 0,
  );
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onDown = (e) =>
      ref.current && !ref.current.contains(e.target) && setOpen(false);
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const doLogout = () => {
    setOpen(false);
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={styles.bar}>
      {!user ? (
        <button
          type="button"
          className={styles.loginBtn}
          onClick={() => dispatch(openAuth("login"))}
        >
          Đăng nhập
        </button>
      ) : (
        <div className={styles.menuWrap} ref={ref}>
          <button
            type="button"
            className={styles.avatarBtn}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
          >
            <Avatar name={user.name} size={30} />
            <span className={styles.caret}>▼</span>
          </button>
          {open && (
            <div className={styles.dropdown}>
              <div className={styles.dropName}>{user.name}</div>
              <Link
                to="/thong-tin-tai-khoan.html"
                className={styles.dropItem}
                onClick={() => setOpen(false)}
              >
                Thông tin tài khoản
              </Link>
              <Link
                to="/tin-bai-da-luu.html"
                className={styles.dropItem}
                onClick={() => setOpen(false)}
              >
                Tin bài đã lưu{" "}
                <span className={styles.badge}>{savedCount}</span>
              </Link>
              <Link
                to="/tin-bai-da-xem.html"
                className={styles.dropItem}
                onClick={() => setOpen(false)}
              >
                Tin bài đã xem{" "}
                <span className={styles.badge}>{viewedCount}</span>
              </Link>
              <button
                type="button"
                className={styles.dropItem}
                onClick={doLogout}
              >
                Thoát tài khoản
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
