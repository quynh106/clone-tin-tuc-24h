import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main className="page-placeholder">
      <h1>Trang chủ</h1>
      <p>HomePage đang được xây dựng.</p>

      <Link to="/bong-da-c48.html">Kiểm tra trang chuyên mục</Link>

      <br />

      <Link to="/bong-da/bai-viet-mau-c48a9990001.html">
        Kiểm tra trang chi tiết
      </Link>
    </main>
  );
}
