import { Link } from "react-router-dom";

// Ảnh thay thế dùng khi RSS chưa có ảnh hoặc ảnh gốc không tải được.
export function placeholderFor(article) {
  const numericId = Number(String(article?.id ?? "").replace(/\D/g, "")) || 24;
  const hue = (numericId * 37) % 360;
  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='740' height='495' viewBox='0 0 740 495'>` +
    `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>` +
    `<stop offset='0' stop-color='hsl(${hue},28%,86%)'/><stop offset='1' stop-color='hsl(${(hue + 40) % 360},30%,76%)'/></linearGradient></defs>` +
    `<rect width='740' height='495' fill='url(#g)'/>` +
    `<text x='50%' y='50%' fill='white' fill-opacity='.8' font-family='Arial,sans-serif' font-size='64' font-weight='bold' text-anchor='middle' dominant-baseline='middle'>24h</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// Link bài 24h được chuyển thành route nội bộ; nguồn ngoài vẫn mở ở tab mới.
export function toInternalPath(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url, "http://localhost");
    const isLocal = parsed.origin === "http://localhost";
    const is24h = parsed.hostname === "24h.com.vn" || parsed.hostname.endsWith(".24h.com.vn");

    if (isLocal || is24h) return `${parsed.pathname}${parsed.search}${parsed.hash}`;
  } catch {
    // URL tương đối hợp lệ vẫn được giữ nguyên để React Router xử lý.
    if (String(url).startsWith("/")) return url;
    return "";
  }

  return url;
}

export function ArticleLink({ article, className, children, ...rest }) {
  const path = toInternalPath(article?.url);
  if (!path) return <span className={className} {...rest}>{children}</span>;

  if (/^https?:\/\//i.test(path)) {
    return (
      <a className={className} href={path} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={path} state={{ article }} {...rest}>
      {children}
    </Link>
  );
}

export function ArticleImage({ article, className, loading = "lazy" }) {
  const fallback = placeholderFor(article);

  return (
    <img
      className={className}
      src={article?.image || fallback}
      alt={article?.title || "Ảnh minh họa tin tức"}
      loading={loading}
      onError={(event) => {
        // Tránh lặp onError nếu chính ảnh fallback có vấn đề.
        event.currentTarget.onerror = null;
        event.currentTarget.src = fallback;
      }}
    />
  );
}
