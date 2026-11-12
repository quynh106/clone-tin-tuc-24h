// Ánh xạ id chuyên mục 24h -> slug/tên dùng trong các khối của trang chủ.
export const HOME_CATEGORY_BY_ID = {
  46: { slug: "tin-tuc-trong-ngay", name: "Tin tức trong ngày" },
  48: { slug: "bong-da", name: "Bóng đá" },
  51: { slug: "an-ninh-xa-hoi", name: "An ninh - Xã hội" },
  52: { slug: "thi-truong-tieu-dung", name: "Thị trường tiêu dùng" },
  55: { slug: "cong-nghe-thong-tin", name: "Công nghệ thông tin" },
  62: { slug: "suc-khoe", name: "Sức khỏe" },
  64: { slug: "ban-tre-cuoc-song", name: "Bạn trẻ - Cuộc sống" },
  73: { slug: "giai-tri", name: "Giải trí" },
  74: { slug: "giai-tri", name: "Giải trí" },
  76: { slug: "an-choi", name: "Ăn - chơi" },
  78: { slug: "dep", name: "Đẹp" },
  101: { slug: "the-thao", name: "Thể thao" },
  145: { slug: "dep", name: "Đẹp" },
  161: { slug: "kinh-doanh", name: "Kinh doanh" },
  216: { slug: "giao-duc", name: "Giáo dục" },
  407: { slug: "thoi-trang-hi-tech", name: "Thời trang Hi-tech" },
  415: { slug: "tin-tuc-quoc-te", name: "Thế giới" },
  460: { slug: "an-choi", name: "Ăn - chơi" },
  731: { slug: "giai-tri", name: "Giải trí" },
  747: { slug: "o-to", name: "Ô tô" },
  748: { slug: "xe-may-xe-dap", name: "Xe máy - Xe đạp" },
  762: { slug: "media-24h", name: "Multimedia" },
};

const NAME_BY_SLUG = Object.fromEntries(
  Object.values(HOME_CATEGORY_BY_ID).map(({ slug, name }) => [slug, name]),
);

// Các feed RSS dùng cho trang chủ; slug là chuyên mục dự phòng khi link bài không có id chuyên mục.
export const HOME_FEEDS = [
  { feed: "tintuctrongngay", slug: "tin-tuc-trong-ngay" },
  { feed: "bongda", slug: "bong-da" },
  { feed: "thethao", slug: "the-thao" },
  { feed: "taichinhbatdongsan", slug: "kinh-doanh" },
  { feed: "suckhoedoisong", slug: "suc-khoe" },
  { feed: "thoitranghitech", slug: "thoi-trang-hi-tech" },
  { feed: "congnghethongtin", slug: "cong-nghe-thong-tin" },
  { feed: "phim", slug: "giai-tri" },
  { feed: "canhacmtv", slug: "giai-tri" },
];

// Chuẩn hóa 1 bài (RSS hoặc dữ liệu chụp sẵn) về đúng chuyên mục của trang chủ.
export function toHomeArticle(article, fallbackSlug = null) {
  const mapped = HOME_CATEGORY_BY_ID[article.categoryId];
  const categorySlug = mapped?.slug ?? fallbackSlug ?? article.categorySlug ?? null;
  return {
    ...article,
    categorySlug,
    categoryName: mapped?.name ?? NAME_BY_SLUG[categorySlug] ?? article.categoryName ?? "",
  };
}
