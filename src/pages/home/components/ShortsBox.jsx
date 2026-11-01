import { Link } from "react-router-dom";
import HScroll from "../../../components/common/HScroll";
import styles from "./shorts.module.css";

const TABS = ["Mới nhất", "Tin tức", "Bóng đá - Thể thao", "Giải trí"];

// shorts: [{ title, cat }] - ảnh dọc tỉ lệ 9:16
export default function ShortsBox({ shorts = [] }) {
  if (shorts.length === 0) return null;
  return (
    <section className={styles.box}>
      <div className={styles.head}>
        <h2 className={styles.tit}><Link to="/video/moi-nhat-shortvd99999.html">24H SHORTS</Link></h2>
        <ul className={styles.cate}>
          {TABS.map((t) => <li key={t}><a href="#shorts">{t}</a></li>)}
        </ul>
      </div>
      <div className={styles.body}>
        <HScroll step={430}>
          {shorts.map((s, i) => (
            <a key={s.title} href="#shorts" className={styles.item} style={{ "--h": (i * 47) % 360 }}>
              <span className={styles.play} aria-hidden="true" />
              <span className={styles.info}>
                <span className={styles.itemCate}>{s.cat}</span>
                <span className={styles.itemTit}>{s.title}</span>
              </span>
            </a>
          ))}
        </HScroll>
      </div>
    </section>
  );
}
