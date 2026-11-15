import { useState } from "react";
import { Link } from "react-router-dom";
import { useResolvedImage } from "../../hooks/useResolvedImage";
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

// Thứ tự thử ảnh: ảnh gốc -> host CDN còn lại -> ảnh og:image lấy từ trang bài -> ảnh thay thế.
export function ArticleImage({ article, className, loading = "lazy" }) {
  const own = typeof article?.image === "string" ? article.image.trim() : "";
  const [fail, setFail] = useState({ own, count: 0 });
  const failures = fail.own === own ? fail.count : 0; // đổi ảnh gốc thì làm lại từ đầu

  const base = [own, alternateHost(own)].filter(Boolean);
  const resolved = useResolvedImage(failures >= base.length ? article?.url : null);
  const candidates = [...base, resolved].filter(Boolean);

  const src = candidates[failures] || placeholderFor(article);

  return (
    <img
      className={className}
      src={src}
      alt={article?.title || "Ảnh minh họa tin tức"}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => {
        if (candidates[failures]) setFail({ own, count: failures + 1 });
      }}
    />
  );
}
