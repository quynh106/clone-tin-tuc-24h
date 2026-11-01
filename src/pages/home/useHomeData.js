import { useMemo } from "react";
import articles from "../../mocks/articles.json";
import widgets from "../../mocks/widgets.json";
import { buildHomeData } from "./homeData";

// Hiện đọc dữ liệu giả. Khi bạn A xong useFeed, thay bằng:
//   const feed = useFeed("trang-chu") ... data = mergeArticles([feed.data, ...])
// Giữ nguyên giá trị trả về { status, error, data } để HomePage không phải sửa.
export default function useHomeData() {
  const data = useMemo(() => ({ ...buildHomeData(articles), widgets }), []);
  return { status: "success", error: null, data };
}
