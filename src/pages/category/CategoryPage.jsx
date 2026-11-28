
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { getCategoryByPath } from "../../config/categories";
import { fetchFeed } from "../../services/rssClient";

import "./category-page.css";

function formatDate(date) {
    if (!date) return "";

    const value = new Date(date);

    if (Number.isNaN(value.getTime())) return "";

    return value.toLocaleString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
}

function getArticlePath(article, category) {
    const originalUrl = article.url || "";
    const articleSlug = originalUrl.split("?")[0].split("/").pop();

    // ArticlePage cần URL bài viết có dạng -c{id}a{id}.html
    if (/-c\d+a\d+\.html$/i.test(articleSlug)) {
        return `/${category.slug}/${articleSlug}`;
    }

    return null;
}

function ArticleItem({ article, category, featured = false }) {
    const articlePath = getArticlePath(article, category);

    const content = (
        <>
            {article.image && (
                <img
                    className="category-article__image"
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                />
            )}

            <div className="category-article__content">
                <h2>{article.title}</h2>

                {article.summary && (
                    <p>{article.summary}</p>
                )}

                <time>{formatDate(article.pubDate)}</time>
            </div>
        </>
    );

    return (
        <article
            className={`category-article ${
                featured ? "category-article--featured" : ""
            }`}
        >
            {articlePath ? (
                <Link
                    to={articlePath}
                    state={{ article }}
                    className="category-article__link"
                >
                    {content}
                </Link>
            ) : (
                <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="category-article__link"
                >
                    {content}
                </a>
            )}
        </article>
    );
}

export default function CategoryPage() {
    const location = useLocation();

    const currentPath = location.pathname.replace(/\/$/, "");
    const category = getCategoryByPath(currentPath);

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const feeds = useMemo(() => {
        if (!category) return [];

        return [
            category.feed,
            ...(category.relatedFeeds || []),
        ].filter(Boolean);
    }, [category]);

    useEffect(() => {
        if (!category) return;

        let cancelled = false;

        async function loadArticles() {
            setLoading(true);
            setError("");
            setArticles([]);

            if (feeds.length === 0) {
                setLoading(false);
                return;
            }

            try {
                const results = await Promise.allSettled(
                    feeds.map((feed) => fetchFeed(feed))
                );

                if (cancelled) return;

                const successfulResults = results
                    .filter((result) => result.status === "fulfilled")
                    .flatMap((result) => result.value);

                if (successfulResults.length === 0) {
                    throw new Error("Không thể tải dữ liệu RSS.");
                }

                const uniqueArticles = Array.from(
                    new Map(
                        successfulResults
                            .filter((article) => article.title && article.url)
                            .map((article) => [
                                article.url,
                                article,
                            ])
                    ).values()
                );

                uniqueArticles.sort((a, b) => {
                    return (
                        new Date(b.pubDate || 0).getTime() -
                        new Date(a.pubDate || 0).getTime()
                    );
                });

                setArticles(uniqueArticles);
            } catch (err) {
                if (!cancelled) {
                    setError(err.message || "Đã xảy ra lỗi khi tải tin tức.");
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadArticles();

        return () => {
            cancelled = true;
        };
    }, [category, feeds]);

    if (!category) {
        return (
            <main className="category-page">
                <h1>Không tìm thấy chuyên mục</h1>
                <p>Đường dẫn: {currentPath}</p>
            </main>
        );
    }

    const featuredArticle = articles[0];
    const latestArticles = articles.slice(1);

    return (
        <main className="category-page">
            <header className="category-page__header">
                <h1>{category.name}</h1>
            </header>

            {loading && (
                <p className="category-page__message">
                    Đang tải tin tức...
                </p>
            )}

            {error && (
                <div className="category-page__message category-page__message--error">
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>
                        Tải lại trang
                    </button>
                </div>
            )}

            {!loading && !error && articles.length === 0 && (
                <p className="category-page__message">
                    Chưa có dữ liệu tin tức cho chuyên mục này.
                </p>
            )}

            {featuredArticle && (
                <section className="category-page__section">
                    <h2 className="category-page__section-title">
                        Tin nổi bật
                    </h2>

                    <ArticleItem
                        article={featuredArticle}
                        category={category}
                        featured
                    />
                </section>
            )}

            {latestArticles.length > 0 && (
                <section className="category-page__section">
                    <h2 className="category-page__section-title">
                        Tin mới nhất
                    </h2>

                    <div className="category-page__list">
                        {latestArticles.map((article) => (
                            <ArticleItem
                                key={article.id || article.url}
                                article={article}
                                category={category}
                            />
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
