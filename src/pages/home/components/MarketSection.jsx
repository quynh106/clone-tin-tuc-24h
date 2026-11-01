const items = [
  "VinFast tổ chức chuỗi ‘Thu xăng đổi điện’ tại 34 trung tâm thương mại Vincom",
  "VinSpeed tăng tốc thi công tuyến đường sắt tốc độ cao Bến Thành - Cần Giờ",
  "Opus Realty liên minh cùng BTC Land Việt Nam phân phối dự án Happy One Elite",
  "Thẻ tín dụng VPBank: Giải pháp tối ưu chi phí cho những chuyến du lịch",
];
export default function MarketSection() { return <section className="market-section"><h2>Tin tức thị trường</h2><div className="market-grid">{items.map((title) => <a key={title} href="https://www.24h.com.vn/kinh-doanh-c161.html">{title}</a>)}</div></section>; }
