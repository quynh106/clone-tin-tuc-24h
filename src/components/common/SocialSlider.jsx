import HScroll from "./HScroll";
import styles from "./SocialSlider.module.css";

const TAGS = ["Dự đoán tỷ số", "Premier league", "CLB Manchester United"];

// "Fan bóng đá nói gì?" - slider bình luận mạng xã hội. posts: [{ name, time, text, images }]
export default function SocialSlider({ title = "Fan bóng đá nói gì?", posts = [] }) {
  if (posts.length === 0) return null;
  return (
    <section className={styles.mxh}>
      <header className={styles.head}>
        <strong className={styles.logo}>{title}</strong>
        <ul className={styles.menu}>
          {TAGS.map((tag) => (
            <li key={tag}><a href="#mxh"><span>#</span><em>{tag}</em></a></li>
          ))}
        </ul>
      </header>
      <div className={styles.body}>
        <HScroll step={660}>
          {posts.map((p, index) => {
            // images: mảng URL ảnh (hoặc số lượng ảnh ở dữ liệu mẫu cũ)
            const images = Array.isArray(p.images) ? p.images.filter(Boolean) : [];
            const placeholders = typeof p.images === "number" ? p.images : 0;
            return (
            <article key={`${p.name}-${p.time}-${index}`} className={styles.item}>
              <div className={styles.top}>
                <span className={styles.ava}>
                  {p.avatar && <img src={p.avatar} alt="" loading="lazy" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = "none"; }} />}
                </span>
                <div>
                  <div className={styles.name}>{p.name}</div>
                  <div className={styles.time}>{p.time}</div>
                </div>
              </div>
              <p className={styles.text}>{p.text}</p>
              {(images.length > 0 || placeholders > 0) && (
                <div className={styles.imgs}>
                  {images.map((src) => (
                    <span key={src} className={styles.img}>
                      <img src={src} alt={p.text} loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                    </span>
                  ))}
                  {Array.from({ length: placeholders }).map((_, i) => <span key={i} className={styles.img} />)}
                </div>
              )}
              <div className={styles.act}><span>Thích</span><span>Bình luận</span><span>Chia sẻ</span></div>
            </article>
            );
          })}
        </HScroll>
      </div>
    </section>
  );
}
