import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Lấy ảnh og:image của bài viết (xem src/services/articleImage.js).
      "/site": {
        target: "https://www.24h.com.vn",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/site/, ""),
        headers: { "User-Agent": "Mozilla/5.0 (compatible; clone-tin-tuc-24h)" },
      },
      "/rss": {
        target: "https://cdn.24h.com.vn",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/rss/, "/upload/rss"),
      },
    },
  },
});
