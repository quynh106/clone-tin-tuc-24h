import styles from "./Widgets.module.css";

const Arrow = ({ trend }) => <span className={`${styles.arrow} ${trend === "up" ? styles.up : trend === "down" ? styles.down : ""}`} />;

// Bảng giá vàng + tỷ giá ngoại tệ. gold: { brand, hotline, rows }, rate: [{ code, buy, sell, trend }]
export default function WidgetGoldPrice({ gold, rate = [] }) {
  const goldRows = Array.isArray(gold?.rows) ? gold.rows : [];
  const rateRows = Array.isArray(rate) ? rate : [];
  const hotline = gold?.hotline || "Đang cập nhật";

  return (
    <div className={styles.pair}>
      <section className={`${styles.box} ${styles.gold}`}>
        <header className={`${styles.tit} ${styles.goldTit}`}>
          <p><a href="#gia-vang">GIÁ VÀNG</a></p>
          <div className={styles.hotline}><span>HOTLINE:</span> {hotline}</div>
        </header>
        <ul className={styles.list}>
          {goldRows.map((r) => (
            <li key={r.name}>
              <a href="#gia-vang">
                <span className={styles.brand}>{r.name}</span>
                <span className={styles.buy}>Mua <strong>{r.buy}</strong><Arrow trend={r.trend} /></span>
                <span className={styles.buy}>Bán <strong>{r.sell}</strong><Arrow trend={r.trend} /></span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${styles.box} ${styles.rate}`}>
        <header className={`${styles.tit} ${styles.rateTit}`}>
          <p><a href="#ty-gia">TỶ GIÁ</a></p>
        </header>
        <ul className={`${styles.list} ${styles.rateList}`}>
          {rateRows.map((r) => (
            <li key={r.code}>
              <a href="#ty-gia">
                <span className={styles.brand}>{r.code}</span>
                <span className={styles.buy}><strong>{r.buy}</strong></span>
                <span className={styles.buy}><strong>{r.sell}</strong><Arrow trend={r.trend} /></span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
