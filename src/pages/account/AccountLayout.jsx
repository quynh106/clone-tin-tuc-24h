import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../components/auth/Avatar";
import { logout, selectCurrentUser } from "../../store/authSlice";
import { openAuth } from "../../store/uiSlice";
import styles from "./account.module.css";

export default function AccountLayout({ title, children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);
  const savedCount = useSelector((s) =>
    user ? (s.saved.byUser[user.email] ?? []).length : 0,
  );
  const viewedCount = useSelector((s) =>
    user ? (s.viewed.byUser[user.email] ?? []).length : 0,
  );

  useEffect(() => {
    if (!user) dispatch(openAuth("login"));
  }, [user, dispatch]);

  if (!user) {
    return (
      <main className={styles.guest}>
        <p>Bạn cần đăng nhập để xem trang này.</p>
        <button
          type="button"
          className={styles.btnPrimary}
          onClick={() => dispatch(openAuth("login"))}
        >
          Đăng nhập
        </button>
      </main>
    );
  }

  const cls = ({ isActive }) =>
    `${styles.menuItem} ${isActive ? styles.active : ""}`;

  return (
    <main className={styles.wrap}>
      <aside className={styles.side}>
        <div className={styles.user}>
          <Avatar name={user.name} size={48} />
          <span>{user.name}</span>
        </div>
        <NavLink to="/thong-tin-tai-khoan.html" className={cls}>
          Thông tin tài khoản
        </NavLink>
        <NavLink to="/tin-bai-da-luu.html" className={cls}>
          Tin bài đã lưu <span className={styles.badge}>{savedCount}</span>
        </NavLink>
        <NavLink to="/tin-bai-da-xem.html" className={cls}>
          Tin bài đã xem <span className={styles.badge}>{viewedCount}</span>
        </NavLink>
        <button
          type="button"
          className={styles.menuItem}
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Thoát tài khoản
        </button>
      </aside>
      <section className={styles.content}>
        <h1 className={styles.pageTitle}>{title}</h1>
        {children}
      </section>
    </main>
  );
}
