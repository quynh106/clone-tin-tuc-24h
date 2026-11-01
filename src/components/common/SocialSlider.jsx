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
          {posts.map((p) => (
            <article key={p.name + p.time} className={styles.item}>
              <div className={styles.top}>
                <span className={styles.ava} />
                <div>
                  <div className={styles.name}>{p.name}</div>
                  <div className={styles.time}>{p.time}</div>
                </div>
              </div>
              <p className={styles.text}>{p.text}</p>
              {p.images > 0 && (
                <div className={styles.imgs}>
                  {Array.from({ length: p.images }).map((_, i) => <span key={i} className={styles.img} />)}
                </div>
              )}
              <div className={styles.act}><span>Thích</span><span>Bình luận</span><span>Chia sẻ</span></div>
            </article>
          ))}
        </HScroll>
      </div>
    </section>
  );
}
