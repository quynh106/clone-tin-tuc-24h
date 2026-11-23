import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import CategoryPage from "../pages/category/CategoryPage";
import ArticlePage from "../pages/article/ArticlePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/account/ProfilePage";
import ArticleListPage from "../pages/account/ArticleListPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/thong-tin-tai-khoan.html" element={<ProfilePage />} />
      <Route
        path="/tin-bai-da-luu.html"
        element={<ArticleListPage kind="saved" />}
      />
      <Route
        path="/tin-bai-da-xem.html"
        element={<ArticleListPage kind="viewed" />}
      />

      <Route path="/:categorySlug/:articleSlug" element={<ArticlePage />} />

      <Route path="/:categoryPage" element={<CategoryPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
