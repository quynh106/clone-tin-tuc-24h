import { fetchFeed } from "./rssClient";
import { getCategoryById } from "../config/categories";

export function feedOfCategory(category) {
  return category?.feed ?? category?.relatedFeeds?.[0] ?? null;
}

export async function getArticle(categoryId, articleId) {
  const feed = feedOfCategory(getCategoryById(categoryId));
  if (!feed) return null;
  const list = await fetchFeed(feed);
  return list.find((a) => a.id === String(articleId)) ?? null;
}

export async function getRelated(categoryId, articleId, limit = 5) {
  const feed = feedOfCategory(getCategoryById(categoryId));
  if (!feed) return [];
  const list = await fetchFeed(feed);
  return list.filter((a) => a.id !== String(articleId)).slice(0, limit);
}
