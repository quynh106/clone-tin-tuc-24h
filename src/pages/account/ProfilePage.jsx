import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../components/auth/Avatar";
import { selectCurrentUser, updateProfile } from "../../store/authSlice";
import { showNotice } from "../../store/uiSlice";
import AccountLayout from "./AccountLayout";
import styles from "./account.module.css";

function ProfileForm({ user }) {
  const dispatch = useDispatch();
  const init = {
    name: user.name,
    phone: user.phone ?? "",
    birthday: user.birthday ?? "",
    address: user.address ?? "",
    gender: user.gender ?? "",
  };
  const [form, setForm] = useState(init);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const save = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    dispatch(updateProfile({ ...form, name: form.name.trim() }));
    dispatch(showNotice({ title: "Cập nhật thông tin thành công" }));
  };

  return (
    <form className={styles.form} onSubmit={save}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <Avatar name={form.name || user.name} size={80} />
        {user.createdAt && (
          <span className={styles.meta}>
            Ngày đăng ký: {new Date(user.createdAt).toLocaleDateString("vi-VN")}
          </span>
        )}
      </div>
      <label className={styles.field}>
        Họ và tên *
        <input value={form.name} onChange={set("name")} required />
      </label>
      <label className={styles.field}>
        Email *
        <input value={user.email} disabled />
      </label>
      <label className={styles.field}>
        Số điện thoại
        <input
          value={form.phone}
          onChange={set("phone")}
          placeholder="Nhập tại đây..."
        />
      </label>
      <label className={styles.field}>
        Ngày sinh
        <input type="date" value={form.birthday} onChange={set("birthday")} />
      </label>
      <label className={styles.field}>
        Địa chỉ
        <textarea rows={3} value={form.address} onChange={set("address")} />
      </label>
      <div className={styles.field}>
        Giới tính
        <div className={styles.radios}>
          {["Nam", "Nữ"].map((g) => (
            <label key={g}>
              <input
                type="radio"
                name="gender"
                checked={form.gender === g}
                onChange={() => setForm({ ...form, gender: g })}
              />{" "}
              {g}
            </label>
          ))}
        </div>
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.btnGhost}
          onClick={() => setForm(init)}
        >
          Hủy bỏ
        </button>
        <button type="submit" className={styles.btnPrimary}>
          Lưu thay đổi
        </button>
      </div>
    </form>
  );
}

export default function ProfilePage() {
  const user = useSelector(selectCurrentUser);
  return (
    <AccountLayout title="Thông tin tài khoản">
      {user && <ProfileForm key={user.email} user={user} />}
    </AccountLayout>
  );
}
