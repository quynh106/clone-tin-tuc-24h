import { parseRss } from "./rssParser";

const cache = new Map();
const TTL = 5 * 60 * 1000;

export function fetchFeed(feed) {
  const hit = cache.get(feed);
  if (hit && Date.now() - hit.time < TTL) return hit.promise;

  const promise = fetch(`/rss/${feed}.rss`)
    .then((res) => {
      if (!res.ok) throw new Error(`Không tải được feed (${res.status})`);
      return res.text();
    })
    .then(parseRss)
    .catch((err) => {
      cache.delete(feed); // lỗi thì không cache
      throw err;
    });

  cache.set(feed, { promise, time: Date.now() });
  return promise;
}
