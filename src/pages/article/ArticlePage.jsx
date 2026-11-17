import { useLocation, useParams } from "react-router-dom";
import { parseArticleUrl } from "../../utils/parseArticleUrl";
import { useArticle } from "../../hooks/useArticle";
import { getCategoryById } from "../../config/categories";
import Loading from "../../components/common/Loading";
import ErrorBox from "../../components/common/ErrorBox";
import ArticleHeader from "./components/ArticleHeader";
import ArticleBody from "./components/ArticleBody";
import RelatedNews from "./components/RelatedNews";
import styles from "./article.module.css";

export default function ArticlePage() {
  const { articleSlug } = useParams();
  const location = useLocation();
  const { categoryId, articleId } = parseArticleUrl(articleSlug);
  const { status, article, related } = useArticle(categoryId, articleId);
  const shown = location.state?.article ?? article;
  const category = getCategoryById(categoryId);

  let content;
  if (!shown && status === "loading") content = <Loading />;
  else if (!shown && status === "error")
    content = <ErrorBox message="Không tải được bài viết." />;
  else if (!shown)
    content = (
      <ErrorBox message="Bài đã ra khỏi feed. Bạn có thể đọc bài gốc trên 24h." />
    );
  else
    content = (
      <>
        <div className={styles.main}>
          <ArticleHeader article={shown} category={category} />
          <ArticleBody article={shown} />
        </div>
        <RelatedNews items={related} />
      </>
    );

  return <main className={styles.page}>{content}</main>;
}
