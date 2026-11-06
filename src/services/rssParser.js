import { parseArticleUrl } from "../utils/parseArticleUrl";
import { CATEGORIES } from "../config/categories";

export function parseRss(xmlText) {
  const doc = new DOMParser().parseFromString(xmlText, "text/xml");
  if (doc.querySelector("parsererror")) throw new Error("RSS không hợp lệ");
  return [...doc.querySelectorAll("item")].map(toArticle);
}

function toArticle(item) {
  const get = (tag) => item.querySelector(tag)?.textContent?.trim() ?? "";
  const link = get("link");
  const { categoryId, articleId } = parseArticleUrl(link);

  // Nếu <description> chứa thẻ con thật (không CDATA/escape) thì lấy innerHTML
  const descEl = item.querySelector("description");
  const rawDesc =
    descEl && descEl.children.length > 0
      ? descEl.innerHTML
      : get("description");
  const html = new DOMParser().parseFromString(rawDesc, "text/html");

  const time = Date.parse(get("pubDate"));
  const cat = CATEGORIES.find((c) => String(c.id) === categoryId);

  return {
    id: articleId ?? link,
    categoryId,
    categorySlug: cat?.slug ?? null,
    title: get("title"),
    summary: html.body.textContent.replace(/\s+/g, " ").trim(),
    image: html.querySelector("img")?.getAttribute("src")?.trim() || "",
    url: link,
    pubDate: Number.isNaN(time) ? null : new Date(time).toISOString(),
  };
}
