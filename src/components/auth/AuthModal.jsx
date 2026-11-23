import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../store/authSlice";
import { closeAuth, openAuth } from "../../store/uiSlice";
import styles from "./auth.module.css";

function AuthForm({ mode }) {
  const dispatch = useDispatch();
  const isRegister = mode === "register";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const close = () => dispatch(closeAuth());

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && dispatch(closeAuth());
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dispatch]);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (isRegister) {
      if (form.password.length < 6)
        return setError("Mật khẩu tối thiểu 6 ký tự.");
      if (form.password !== form.confirm)
        return setError("Mật khẩu nhập lại không khớp.");
    }
    setBusy(true);
    try {
      await dispatch(
        isRegister ? registerUser(form) : loginUser(form),
      ).unwrap();
      close();
    } catch (err) {
      setError(typeof err === "string" ? err : "Có lỗi xảy ra, thử lại.");
      setBusy(false);
    }
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={(e) => e.target === e.currentTarget && close()}
    >
      <div className={styles.dialog} role="dialog" aria-modal="true">
        <button
          type="button"
          className={styles.close}
          onClick={close}
          aria-label="Đóng"
        >
          ×
        </button>
        <div className={styles.logo}>
          24<span>h</span>
        </div>
        <p className={styles.lead}>
          {isRegister
            ? "Đăng ký tài khoản 24h.com.vn"
            : "Đăng nhập 24h.com.vn bằng tài khoản"}
        </p>
        <form className={styles.form} onSubmit={submit}>
          {isRegister && (
            <input
              placeholder="Họ và tên"
              value={form.name}
              onChange={set("name")}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={set("email")}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={set("password")}
            required
          />
          {isRegister && (
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              value={form.confirm}
              onChange={set("confirm")}
              required
            />
          )}
          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}
          <button type="submit" className={styles.primary} disabled={busy}>
            {busy ? "Đang xử lý..." : isRegister ? "Đăng ký" : "Đăng nhập"}
          </button>
        </form>
        <p className={styles.switch}>
          {isRegister ? "Đã có tài khoản? " : "Chưa có tài khoản? "}
          <button
            type="button"
            className={styles.link}
            onClick={() =>
              dispatch(openAuth(isRegister ? "login" : "register"))
            }
          >
            {isRegister ? "Đăng nhập" : "Đăng ký"}
          </button>
        </p>
        <p className={styles.terms}>
          Khi thực hiện “{isRegister ? "Đăng ký" : "Đăng nhập"}” có nghĩa là bạn
          đã đồng ý với Điều khoản dịch vụ và Chính sách quyền riêng tư của
          trang.
        </p>
      </div>
    </div>
  );
}

export default function AuthModal() {
  const mode = useSelector((s) => s.ui.authModal);
  if (!mode) return null;
  return <AuthForm key={mode} mode={mode} />; // key đổi thì form được làm mới
}
