import { useRef } from "react";
import styles from "./hscroll.module.css";

// Slider ngang: kéo/cuộn hoặc bấm nút trái-phải (không cần thư viện Swiper).
export default function HScroll({ children, step = 600, className = "" }) {
  const track = useRef(null);
  const go = (dir) => track.current?.scrollBy({ left: dir * step, behavior: "smooth" });
  return (
    <div className={`${styles.wrap} ${className}`}>
      <button type="button" className={`${styles.btn} ${styles.prev}`} onClick={() => go(-1)} aria-label="Trước">
        <i className={styles.arrow} />
      </button>
      <div className={styles.track} ref={track}>{children}</div>
      <button type="button" className={`${styles.btn} ${styles.next}`} onClick={() => go(1)} aria-label="Sau">
        <i className={styles.arrow} />
      </button>
    </div>
  );
}
