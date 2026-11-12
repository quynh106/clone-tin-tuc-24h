const dayNews = [
  { title: "‘Số phận’ 12 dự án Mường Thanh tại Hà Nội: Hạng mục nào được tồn tại, phần nào buộc phá dỡ?", href: "https://www.24h.com.vn/kinh-doanh-c161.html" },
  { title: "Hà Nội: Khởi tố người điều khiển cần cẩu khiến một phụ nữ tử vong", href: "https://www.24h.com.vn/tin-tuc-trong-ngay-c46.html" },
  { title: "Phó Đức Nam khai ra ‘trùm cuối’ đứng đầu chuỗi lừa đảo chiếm đoạt hơn 1.500 tỷ", href: "https://www.24h.com.vn/tin-tuc-trong-ngay-c46.html" },
];
const footballNews = [
  { title: "Tielemans cảnh báo MU đừng sa thải Carrick, Martinez có đại gia săn đón", href: "https://www.24h.com.vn/bong-da-c48.html" },
  { title: "Dự đoán tỉ số Chelsea - MU: Đại chiến nhiều ẩn số", href: "https://www.24h.com.vn/bong-da-c48.html" },
  { title: "Carrick đối mặt 3 quyết định quan trọng ở trận MU đại chiến Chelsea", href: "https://www.24h.com.vn/bong-da-c48.html" },
];
function LinkList({ items }) { return <ul className="headline-list">{items.map((item) => <li key={item.title}><a href={item.href}>{item.title}</a></li>)}</ul>; }
function NewsColumn({ title, tabs, items }) { return <section className="news-column"><div className="section-heading"><h2>{title}</h2><div>{tabs.map((tab) => <span key={tab}>{tab}</span>)}</div></div><LinkList items={items} /></section>; }
export default function NewsSections() { return <div className="news-columns">
  <NewsColumn title="Tin tức trong ngày" tabs={["An ninh - Xã hội", "Multimedia"]} items={dayNews} />
  <NewsColumn title="Bóng đá" tabs={["Thể thao", "Video", "Ngoại hạng Anh", "Lịch thi đấu"]} items={footballNews} />
</div>; }
