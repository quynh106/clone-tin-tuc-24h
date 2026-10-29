import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="page-placeholder">
      <h1>404 - Không tìm thấy trang</h1>
      <Link to="/">Quay về trang chủ</Link>
    </main>
  );
}
