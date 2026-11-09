import { useLocation, useParams } from "react-router-dom";
import { parseArticleUrl } from "../../utils/parseArticleUrl";
import { useArticle } from "../../hooks/useArticle";
import Loading from "../../components/common/Loading";
import ErrorBox from "../../components/common/ErrorBox";
import ArticleCard from "../../components/common/ArticleCard";

export default function ArticlePage() {
  const { articleSlug } = useParams();
  const location = useLocation();
  const { categoryId, articleId } = parseArticleUrl(articleSlug);
  const { status, article, related } = useArticle(categoryId, articleId);
  const shown = location.state?.article ?? article;

  if (!shown && status === "loading") return <Loading />;
  if (!shown && status === "error")
    return <ErrorBox message="Không tải được bài viết." />;
  if (!shown)
    return <ErrorBox message="Bài đã ra khỏi feed. Bạn có thể đọc bài gốc trên 24h." />;

  return (
    <main>
      <h1>{shown.title}</h1>
      {shown.pubDate && (
        <time>{new Date(shown.pubDate).toLocaleString("vi-VN")}</time>
      )}
      {shown.image && <img src={shown.image} alt={shown.title} />}
      <p>{shown.summary}</p>
      <a href={shown.url} target="_blank" rel="noreferrer">
        Đọc bài gốc trên 24h
      </a>
      <h2>Tin liên quan</h2>
      {related.map((a) => (
        <ArticleCard key={a.id} article={a} variant="horizontal" showSummary />
      ))}
    </main>
  );
}