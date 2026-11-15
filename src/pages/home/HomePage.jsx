
import Loading from "../../components/common/Loading";
import ErrorBox from "../../components/common/ErrorBox";
import AdSlot from "../../components/common/AdSlot";
import SocialSlider from "../../components/common/SocialSlider";
import WidgetGoldPrice from "../../components/common/WidgetGoldPrice";
import WidgetCrypto from "../../components/common/WidgetCrypto";

import HeroSection from "./components/HeroSection";
import CateBlockTop from "./components/CateBlockTop";
import MarketNews from "./components/MarketNews";
import EntertainmentBox from "./components/EntertainmentBox";
import BottomSection from "./components/BottomSection";

import useHomeData from "./useHomeData";
import { take } from "./homeData";

import styles from "./home.module.css";

// Component chia bố cục thành 2 cột
function Row({ children, className = "" }) {
  return (
    <section className={`${styles.row} ${className}`}>
      {children}
    </section>
  );
}

export default function HomePage() {
  const { status, isFetching, error, data, retry } = useHomeData();

  // 1. Dữ liệu không hợp lệ (không có dữ liệu để dựng trang)
  if (!data || !data.byCategory) {
    return (
      <main className={styles.page}>
        <ErrorBox
          message="Dữ liệu trang chủ không hợp lệ. Vui lòng kiểm tra lại nguồn dữ liệu."
          onRetry={retry}
        />
      </main>
    );
  }

  // 2. Khởi tạo dữ liệu
  const by = data.byCategory;
  const widgets = data.widgets || {};

  // 3. Lấy dữ liệu an toàn
  const getArticles = (slug, count, from = 0) => {
    return take(by, slug, count, from);
  };

  return (
    <main
      className={styles.page}
      aria-label="Trang chủ tin tức 24h"
    >
      {/* Trạng thái tải RSS: không chặn trang vì đã có dữ liệu chụp sẵn */}
      {status === "error" ? (
        <div className={styles.notice}>
          <ErrorBox message={error?.message} onRetry={retry} />
        </div>
      ) : (
        isFetching && (
          <div className={styles.notice}>
            <Loading text="Đang cập nhật tin mới nhất..." />
          </div>
        )
      )}

      {/* =========================
          1. TIN NỔI BẬT
      ========================== */}
      <section className={styles.heroSection}>
        <HeroSection
          main={data.main || null}
          subs={data.subs || []}
          list={data.list || []}
        />
      </section>

      <AdSlot size="billboard" className={styles.ad} />

      {/* =========================
          2. TIN TỨC TRONG NGÀY
          3. BÓNG ĐÁ
      ========================== */}
      <Row>
        <CateBlockTop
          slug="tin-tuc-trong-ngay"
          articles={getArticles("tin-tuc-trong-ngay", 6)}
        />

        <CateBlockTop
          slug="bong-da"
          articles={getArticles("bong-da", 6)}
        />
      </Row>

      {/* =========================
          4. TIN VIDEO / MẠNG XÃ HỘI
      ========================== */}
      {widgets.social?.length > 0 && (
        <section className={styles.socialSection}>
          <SocialSlider posts={widgets.social} />
        </section>
      )}

      {/* =========================
          5. KINH DOANH
          6. THỊ TRƯỜNG TIÊU DÙNG
      ========================== */}
      <Row>
        <CateBlockTop
          slug="kinh-doanh"
          articles={getArticles("kinh-doanh", 6)}
        />

        <CateBlockTop
          slug="thi-truong-tieu-dung"
          articles={getArticles("thi-truong-tieu-dung", 6)}
        />
      </Row>

      {/* =========================
          7. TIN QUỐC TẾ
          8. SỨC KHỎE
      ========================== */}
      <Row>
        <CateBlockTop
          slug="tin-tuc-quoc-te"
          articles={getArticles("tin-tuc-quoc-te", 5)}
          layout="list"
        />

        <CateBlockTop
          slug="suc-khoe"
          articles={getArticles("suc-khoe", 5)}
          layout="list"
        />
      </Row>

      {/* =========================
          9. GIÁ VÀNG
          10. THỊ TRƯỜNG CHỨNG KHOÁN
      ========================== */}
      {(widgets.gold || widgets.rate) && (
        <Row>
          <WidgetGoldPrice
            gold={widgets.gold}
            rate={widgets.rate}
          />

          <WidgetCrypto
            stock={widgets.stock}
          />
        </Row>
      )}

      {/* =========================
          11. TIN THỊ TRƯỜNG
      ========================== */}
      <section className={styles.marketSection}>
        <MarketNews
          articles={getArticles("kinh-doanh", 4, 6)}
        />
      </section>

      <AdSlot size="leaderboard" className={styles.ad} />

      {/* =========================
          12. GIẢI TRÍ
      ========================== */}
      <section className={styles.entertainmentSection}>
        <EntertainmentBox
          articles={getArticles("giai-tri", 9)}
        />
      </section>

      {/* =========================
          13. CÁC CHUYÊN MỤC CUỐI TRANG
      ========================== */}
      <section className={styles.bottomSection}>
        <BottomSection
          by={by}
          shorts={widgets.shorts || []}
        />
      </section>
    </main>
  );
}
