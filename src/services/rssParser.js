import { parseArticleUrl } from "../utils/parseArticleUrl";
import { CATEGORIES } from "../config/categories";

const SITE_ORIGIN = "https://www.24h.com.vn";
const IMG_EXT = /\.(?:jpe?g|png|webp|gif|avif)(?:[?#].*)?$/i;
const SKIP_IMG = /(logo|icon|avatar|blank|pixel|spacer|1x1|loading)/i;

// Lấy các thẻ theo tên cục bộ (bỏ qua namespace media:, content:, ...).
function byLocalName(root, names) {
  const accepted = new Set(names);
  return [...root.getElementsByTagName("*")].filter((node) =>
    accepted.has(
      (node.localName || node.nodeName.split(":").pop()).toLowerCase(),
    ),
  );
}

// Chuẩn hóa URL ảnh: //cdn..., /upload/..., http -> https, bỏ khoảng trắng.
export function absoluteUrl(value) {
  const raw = String(value ?? "").trim();
  if (!raw || raw.startsWith("data:")) return "";
  let url = raw;
  if (url.startsWith("//")) url = `https:${url}`;
  else if (url.startsWith("/")) url = `${SITE_ORIGIN}${url}`;
  else if (url.startsWith("http://")) url = `https://${url.slice(7)}`;
  return /^https:\/\//i.test(url) ? url.replace(/\s/g, "%20") : "";
}

function firstImgFromHtml(html) {
  if (!html) return "";
  const doc = new DOMParser().parseFromString(html, "text/html");
  for (const img of doc.querySelectorAll("img")) {
    const src =
      img.getAttribute("data-original") ||
      img.getAttribute("data-src") ||
      img.getAttribute("src") ||
      "";
    const url = absoluteUrl(src);
    if (url && !SKIP_IMG.test(url)) return url;
  }
  return "";
}

// Thứ tự ưu tiên: media:content > media:thumbnail > enclosure > <img> trong description > content:encoded.
function extractImage(item, descriptionHtml) {
  const media = byLocalName(item, ["content", "thumbnail", "enclosure"]);
  const candidates = media
    .map((node) => ({
      url:
        node.getAttribute("url") ||
        node.getAttribute("href") ||
        node.getAttribute("src") ||
        "",
      type: (
        node.getAttribute("type") ||
        node.getAttribute("medium") ||
        ""
      ).toLowerCase(),
    }))
    .filter(({ url }) => url);

  const isImage = ({ url, type }) =>
    type.startsWith("image") || type === "image" || IMG_EXT.test(url);
  const picked =
    candidates.find(isImage) ||
    candidates.find(({ type }) => !type.startsWith("video"));
  if (picked) {
    const url = absoluteUrl(picked.url);
    if (url) return url;
  }

  const fromDesc = firstImgFromHtml(descriptionHtml);
  if (fromDesc) return fromDesc;

  const encoded = byLocalName(item, ["encoded"])[0];
  return firstImgFromHtml(encoded?.textContent || "");
}

// Đổi & trần thành &amp;, bỏ qua các đoạn CDATA (trong CDATA & được phép)
function sanitizeXml(text) {
  return text
    .split(/(<!\[CDATA\[[\s\S]*?\]\]>)/)
    .map((part, i) =>
      i % 2 === 1
        ? part
        : part.replace(
            /&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g,
            "&amp;",
          ),
    )
    .join("");
}

export function parseRss(xmlText) {
  const doc = new DOMParser().parseFromString(sanitizeXml(xmlText), "text/xml");
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
    image: extractImage(item, rawDesc),
    url: link,
    pubDate: Number.isNaN(time) ? null : new Date(time).toISOString(),
  };
}
