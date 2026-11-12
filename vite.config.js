import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/rss": {
        target: "https://cdn.24h.com.vn",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/rss/, "/upload/rss"),
      },
    },
  },
});
