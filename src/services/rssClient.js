import { parseRss } from "./rssParser";

const cache = new Map();
const TTL = 5 * 60 * 1000;
const TIMEOUT = 8000;

export function fetchFeed(feed) {
  const hit = cache.get(feed);
  if (hit && Date.now() - hit.time < TTL) return hit.promise;

  // Quá thời gian thì hủy để một feed treo không làm chậm cả trang chủ.
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT);

  const promise = fetch(`/rss/${feed}.rss`, { signal: controller.signal })
    .then((res) => {
      if (!res.ok) throw new Error(`Không tải được feed (${res.status})`);
      return res.text();
    })
    .then(parseRss)
    .catch((err) => {
      cache.delete(feed); // lỗi thì không cache
      throw err;
    })
    .finally(() => clearTimeout(timer));

  cache.set(feed, { promise, time: Date.now() });
  return promise;
}
