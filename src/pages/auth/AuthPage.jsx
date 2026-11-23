import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../store/authSlice";
import styles from "./auth.module.css";

export default function AuthPage({ mode = "login" }) {
  const isRegister = mode === "register";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? "/";

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (isRegister) {
      if (form.password.length < 6)
        return setError("Mật khẩu tối thiểu 6 ký tự.");
      if (form.password !== form.confirm)
        return setError("Mật khẩu nhập lại không khớp.");
    }
    try {
      const action = isRegister ? registerUser(form) : loginUser(form);
      await dispatch(action).unwrap();
      navigate(from, { replace: true });
    } catch (err) {
      setError(typeof err === "string" ? err : "Có lỗi xảy ra, thử lại.");
    }
  };

  return (
    <main className={styles.wrap}>
      <form className={styles.box} onSubmit={submit}>
        <h1 className={styles.title}>{isRegister ? "ĐĂNG KÝ" : "ĐĂNG NHẬP"}</h1>
        {isRegister && (
          <input
            placeholder="Họ tên"
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
        <button type="submit">{isRegister ? "Đăng ký" : "Đăng nhập"}</button>
        <p className={styles.switch}>
          {isRegister ? (
            <>
              Đã có tài khoản?{" "}
              <Link to="/dang-nhap" state={location.state}>
                Đăng nhập
              </Link>
            </>
          ) : (
            <>
              Chưa có tài khoản?{" "}
              <Link to="/dang-ky" state={location.state}>
                Đăng ký
              </Link>
            </>
          )}
        </p>
      </form>
    </main>
  );
}
