import styles from "./Widgets.module.css";

// Bảng chứng khoán: stock = [{ code, point, diff, trend }]
export default function WidgetCrypto({ stock = [] }) {
  const safeStock = Array.isArray(stock) ? stock : [];
  const color = {
    up: styles.cUp,
    down: styles.cDown,
    keep: styles.cKeep,
  };

  return (
    <section className={`${styles.box} ${styles.stock}`}>
      <header className={`${styles.tit} ${styles.stockTit}`}>
        <p><a href="#chung-khoan">CHỨNG KHOÁN</a></p>
      </header>

      {safeStock.length > 0 ? (
        <ul className={styles.stockList}>
          {safeStock.map((item) => {
            const trend = color[item.trend] ? item.trend : "keep";
            return (
              <li key={item.code}>
                <a href="#chung-khoan">
                  <span className={styles.code}>{item.code}</span>
                  <span className={`${styles.point} ${color[trend]}`}>
                    <i
                      className={`${styles.arrow} ${
                        trend === "up"
                          ? styles.up
                          : trend === "down"
                            ? styles.down
                            : styles.keepDot
                      }`}
                    />
                    {item.point}
                  </span>
                  <span className={`${styles.diff} ${color[trend]}`}>
                    {item.diff}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Chưa có dữ liệu chứng khoán.</p>
      )}
    </section>
  );
}
