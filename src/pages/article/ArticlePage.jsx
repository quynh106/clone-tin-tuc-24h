import { useLocation, useParams } from "react-router-dom";
import { parseArticleUrl } from "../../utils/parseArticleUrl";
import { useArticle } from "../../hooks/useArticle";
import { getCategoryById } from "../../config/categories";
import Loading from "../../components/common/Loading";
import ErrorBox from "../../components/common/ErrorBox";
import ArticleHeader from "./components/ArticleHeader";
import ArticleBody from "./components/ArticleBody";
import RelatedNews from "./components/RelatedNews";
import ArticleSidebar from "./components/ArticleSidebar";
import ArticleBottom from "./components/ArticleBottom";
import styles from "./article.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/authSlice";
import { addViewed } from "../../store/viewedSlice";

export default function ArticlePage() {
  const { articleSlug } = useParams();
  const location = useLocation();
  const { categoryId, articleId } = parseArticleUrl(articleSlug);
  const { status, article, related } = useArticle(categoryId, articleId);
  const shown = location.state?.article ?? article;
  const category = getCategoryById(categoryId);
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    if (user && shown)
      dispatch(addViewed({ email: user.email, article: shown }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email, shown?.id]);

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
          <RelatedNews items={related} />
          <ArticleBottom currentId={shown.id} />
        </div>
        <ArticleSidebar currentId={shown.id} />
      </>
    );

  return <main className={styles.page}>{content}</main>;
}
