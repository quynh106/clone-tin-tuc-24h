import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import CategoryPage from "../pages/category/CategoryPage";
import ArticlePage from "../pages/article/ArticlePage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/:categorySlug/:articleSlug" element={<ArticlePage />} />

      <Route path="/:categoryPage" element={<CategoryPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
