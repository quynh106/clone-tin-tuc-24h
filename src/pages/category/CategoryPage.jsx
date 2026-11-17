import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { categoryPage } = useParams();

  return (
    <main className="page-placeholder">
      <h1>Trang chuyên mục</h1>
      <p>Đường dẫn: {categoryPage}</p>
    </main>
  );
}
