import { Link } from "react-router-dom";
import { placeholderFor, toInternalPath } from "./articleHelpers";

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

// Ảnh 24h có 2 host (icdn/cdn). Nếu 1 host lỗi thì thử host còn lại trước khi dùng ảnh thay thế.
function alternateHost(url) {
  if (!url) return "";
  if (url.includes("//icdn.24h.com.vn/")) return url.replace("//icdn.24h.com.vn/", "//cdn.24h.com.vn/");
  if (url.includes("//cdn.24h.com.vn/")) return url.replace("//cdn.24h.com.vn/", "//icdn.24h.com.vn/");
  return "";
}

export function ArticleImage({ article, className, loading = "lazy" }) {
  const fallback = placeholderFor(article);
  const src = typeof article?.image === "string" ? article.image.trim() : "";

  const handleError = (event) => {
    const img = event.currentTarget;
    const retry = alternateHost(src);
    // Thử host khác đúng 1 lần, sau đó dùng ảnh thay thế (và không lặp onError).
    if (retry && !img.dataset.retried && img.src !== retry) {
      img.dataset.retried = "1";
      img.src = retry;
      return;
    }
    img.onerror = null;
    img.src = fallback;
  };

  return (
    <img
      className={className}
      src={src || fallback}
      alt={article?.title || "Ảnh minh họa tin tức"}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={handleError}
    />
  );
}
