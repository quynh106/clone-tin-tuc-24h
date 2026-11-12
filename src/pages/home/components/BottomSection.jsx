import CateNewsMd from "./CateNewsMd";
import MultiBox from "./MultiBox";
import ShortsBox from "./ShortsBox";
import SideBeauty from "./SideBeauty";
import { take } from "../homeData";
import styles from "./bottom.module.css";

function Pair({ slugs, by }) {
  return (
    <div className={styles.pair}>
      {slugs.map((slug) => (
        <CateNewsMd key={slug} slug={slug} articles={take(by, slug, 5)} />
      ))}
    </div>
  );
}

export default function BottomSection({ by, shorts }) {
  return (
    <section className={styles.wrap}>
      <div className={styles.left}>
        <Pair slugs={["xe-may-xe-dap", "o-to"]} by={by} />
        <Pair slugs={["thoi-trang-hi-tech", "cong-nghe-thong-tin"]} by={by} />
        <MultiBox slug="dep" articles={take(by, "dep", 10)} beauty />
        <Pair slugs={["the-thao", "ban-tre-cuoc-song"]} by={by} />
        <Pair slugs={["an-ninh-xa-hoi", "giao-duc"]} by={by} />
        <MultiBox slug="an-choi" articles={take(by, "an-choi", 10)} beauty />
        <ShortsBox shorts={shorts} />
        <MultiBox slug="media-24h" articles={take(by, "media-24h", 10)} />
      </div>
      <aside className={styles.right}>
        <SideBeauty articles={take(by, "dep", 4, 4)} />
      </aside>
    </section>
  );
}
