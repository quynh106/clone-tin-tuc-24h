/**
 * Nguồn dữ liệu chuẩn cho:
 * - Router
 * - Menu
 * - RSS Service
 *
 * id: ID chuyên mục trên website 24h
 * slug: Slug dùng trong ứng dụng
 * path: URL trang chuyên mục chính thức
 * feed: Tên RSS, không có đuôi .rss
 *
 * feed = null: Chưa xác định RSS riêng tương ứng.
 */

export const CATEGORIES = [
  {
    id: "46",
    slug: "tin-tuc-trong-ngay",
    name: "Tin tức",
    path: "/tin-tuc-trong-ngay-c46.html",
    feed: "tintuctrongngay",
  },
  {
    id: "48",
    slug: "bong-da",
    name: "Bóng đá",
    path: "/bong-da-c48.html",
    feed: "bongda",
  },
  {
    id: "161",
    slug: "kinh-doanh",
    name: "Kinh doanh",
    path: "/kinh-doanh-c161.html",
    feed: null,
    relatedFeeds: ["taichinhbatdongsan"],
  },
  {
    id: "731",
    slug: "giai-tri",
    name: "Giải trí",
    path: "/giai-tri-c731.html",
    feed: null,
    relatedFeeds: ["phim", "canhacmtv"],
  },
  {
    id: "62",
    slug: "suc-khoe",
    name: "Sức khỏe",
    path: "/suc-khoe-c62.html",
    feed: "suckhoedoisong",
  },
  {
    id: "407",
    slug: "thoi-trang-hi-tech",
    name: "Hi-tech",
    path: "/thoi-trang-hi-tech-c407.html",
    feed: "thoitranghitech",
    relatedFeeds: ["congnghethongtin"],
  },
  {
    id: "415",
    slug: "the-gioi",
    name: "Thế giới",
    path: "/tin-tuc-quoc-te-c415.html",
    feed: null,
  },
  {
    id: "101",
    slug: "the-thao",
    name: "Thể thao",
    path: "/the-thao-c101.html",
    feed: "thethao",
  },
];

// Cấu hình website
export const SITE_CONFIG = {
  name: "24h.com.vn",
  baseUrl: "https://www.24h.com.vn",

  homeFeed: "trangchu24h",
};

// Tìm chuyên mục theo ID
export const getCategoryById = (id) => {
  return CATEGORIES.find((category) => category.id === String(id));
};

// Tìm chuyên mục theo slug
export const getCategoryBySlug = (slug) => {
  return CATEGORIES.find((category) => category.slug === slug);
};
// Tìm chuyên mục theo đường dẫn URL chính thức
export const getCategoryByPath = (path) => {
  return CATEGORIES.find((category) => category.path === path);
};