import { ADS } from "../../config/ads";
import styles from "./AdSlot.module.css";

// Khung quảng cáo. Nếu ảnh lỗi thì ẩn cả khung, không để lại ô trống.
export default function AdSlot({ size = "billboard", className = "" }) {
  const ad = ADS[size];
  if (!ad) return null;

  return (
    <aside className={`${styles.slot} ${styles[size] || ""} ${className}`.trim()} aria-label="Quảng cáo">
      <span className={styles.label}>Quảng cáo</span>
      <a href={ad.href} target="_blank" rel="sponsored noopener noreferrer" className={styles.link}>
        <img
          src={ad.image}
          alt={ad.alt}
          width={ad.width}
          height={ad.height}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.closest("aside").style.display = "none";
          }}
        />
      </a>
    </aside>
  );
}
