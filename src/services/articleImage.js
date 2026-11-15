import { absoluteUrl } from "./rssParser";

// Lấy ảnh đại diện (og:image) từ trang bài viết 24h, dùng cho bài mà RSS/dữ liệu mẫu không có ảnh.
// Gọi qua proxy `/site` của Vite (xem vite.config.js) để tránh lỗi CORS.
const STORE_KEY = "img-resolver-v1";
const MAX_PARALLEL = 4;
const TIMEOUT = 8000;
const ARTICLE_PATH = /-c\d+a\d+\.html$/;

const memory = new Map(); // path -> Promise<string>
const queue = [];
let running = 0;

function loadStore() {
  try {
    return JSON.parse(sessionStorage.getItem(STORE_KEY) || "{}");
  } catch {
    return {};
  }
}
const stored = loadStore();

function saveStore(path, image) {
  stored[path] = image;
  try {
    sessionStorage.setItem(STORE_KEY, JSON.stringify(stored));
  } catch {
    // Bộ nhớ đầy hoặc bị chặn: bỏ qua, vẫn còn cache trong bộ nhớ.
  }
}

function toArticlePath(url) {
  if (!url) return "";
  try {
    const { pathname } = new URL(url, "https://www.24h.com.vn");
    return ARTICLE_PATH.test(pathname) ? pathname : "";
  } catch {
    return "";
  }
}

function pickOgImage(html) {
  const metas = html.match(/<meta[^>]+>/gi) || [];
  for (const tag of metas) {
    if (!/(?:property|name)=["']og:image(?::url)?["']/i.test(tag)) continue;
    const content = tag.match(/content=["']([^"']+)["']/i)?.[1];
    const url = absoluteUrl(content);
    if (url) return url;
  }
  return "";
}

async function fetchOgImage(path) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);
  try {
    const res = await fetch(`/site${path}`, { signal: controller.signal });
    if (!res.ok) return "";
    return pickOgImage(await res.text());
  } catch {
    return "";
  } finally {
    clearTimeout(timer);
  }
}

function pump() {
  while (running < MAX_PARALLEL && queue.length > 0) {
    const { path, resolve } = queue.shift();
    running += 1;
    fetchOgImage(path)
      .then((image) => {
        saveStore(path, image);
        resolve(image);
      })
      .finally(() => {
        running -= 1;
        pump();
      });
  }
}

export function resolveArticleImage(url) {
  const path = toArticlePath(url);
  if (!path) return Promise.resolve("");
  if (path in stored) return Promise.resolve(stored[path]);
  if (!memory.has(path)) {
    memory.set(
      path,
      new Promise((resolve) => {
        queue.push({ path, resolve });
        pump();
      }),
    );
  }
  return memory.get(path);
}
