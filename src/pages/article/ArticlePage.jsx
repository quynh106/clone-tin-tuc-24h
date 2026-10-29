import { useParams } from "react-router-dom";

export default function ArticlePage() {
  const { categorySlug, articleSlug } = useParams();

  return (
    <main className="page-placeholder">
      <h1>Trang chi tiết bài viết</h1>
      <p>Chuyên mục: {categorySlug}</p>
      <p>Bài viết: {articleSlug}</p>
    </main>
  );
}
