import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import CategoryPage from "../pages/category/CategoryPage";
import ArticlePage from "../pages/article/ArticlePage";
import NotFoundPage from "../pages/NotFoundPage";
import AuthPage from "../pages/auth/AuthPage";
import SavedPage from "../pages/saved/SavedPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/dang-nhap" element={<AuthPage mode="login" />} />
      <Route path="/dang-ky" element={<AuthPage mode="register" />} />
      <Route path="/bai-da-luu" element={<SavedPage />} />

      <Route path="/:categorySlug/:articleSlug" element={<ArticlePage />} />

      <Route path="/:categoryPage" element={<CategoryPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
