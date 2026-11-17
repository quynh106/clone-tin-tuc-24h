import './CategoryPage.css'

const newsData = [
    {
        id: 1,
        title: 'Tin tức nổi bật hôm nay: Những sự kiện đáng chú ý',
        description: 'Cập nhật những thông tin mới nhất trong ngày...',
        image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600',
        category: 'Thời sự',
        time: '10 phút trước',
    },
    {
        id: 2,
        title: 'Thị trường kinh tế có nhiều diễn biến mới',
        description: 'Những thông tin đáng chú ý về kinh tế và thị trường.',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600',
        category: 'Kinh doanh',
        time: '30 phút trước',
    },
    {
        id: 3,
        title: 'Những sự kiện thể thao được quan tâm hôm nay',
        description: 'Cập nhật tin tức thể thao trong nước và quốc tế.',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600',
        category: 'Thể thao',
        time: '45 phút trước',
    },
    {
        id: 4,
        title: 'Công nghệ mới và những xu hướng đáng chú ý',
        description: 'Khám phá những thay đổi mới trong lĩnh vực công nghệ.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600',
        category: 'Công nghệ',
        time: '1 giờ trước',
    },
]

function CategoryPage() {
    return (
        <div className="category-page">

            <header className="category-header">
                <div className="category-header-inner">
                    <a href="/" className="category-logo">24h</a>

                    <nav className="main-menu">
                        <a href="#">Tin tức</a>
                        <a href="#">Bóng đá</a>
                        <a href="#">Kinh doanh</a>
                        <a href="#">Giải trí</a>
                        <a href="#">Sức khỏe</a>
                        <a href="#">Thế giới</a>
                        <a href="#">Công nghệ</a>
                    </nav>
                </div>
            </header>

            /* THANH DANH MỤC */
            <div className="category-navigation">
                <a href="#">Trang chủ</a>
                <a href="#">Thời sự</a>
                <a href="#">Thế giới</a>
                <a href="#">Kinh doanh</a>
                <a href="#">Thể thao</a>
                <a href="#">Giải trí</a>
                <a href="#">Công nghệ</a>
            </div>

            /* NỘI DUNG CHÍNH */
            <main className="category-container">

                <div className="category-breadcrumb">
                    Trang chủ / Tin tức / Thời sự
                </div>

                <h1 className="category-title">TIN TỨC THỜI SỰ</h1>

                <div className="category-content">

                    /* CỘT TIN TỨC */
                    <section className="news-section">

                        <article className="featured-news">
                            <img
                                src={newsData[0].image}
                                alt="Tin nổi bật"
                            />

                            <div className="featured-info">
                <span className="news-category">
                  {newsData[0].category}
                </span>

                                <h2>{newsData[0].title}</h2>

                                <p>{newsData[0].description}</p>

                                <span className="news-time">
                  {newsData[0].time}
                </span>
                            </div>
                        </article>

                        <h2 className="section-heading">
                            TIN MỚI NHẤT
                        </h2>

                        <div className="news-list">
                            {newsData.slice(1).map((news) => (
                                <article className="news-item" key={news.id}>
                                    <img src={news.image} alt={news.title} />

                                    <div className="news-item-info">
                    <span className="news-category">
                      {news.category}
                    </span>

                                        <h3>{news.title}</h3>

                                        <p>{news.description}</p>

                                        <span className="news-time">
                      {news.time}
                    </span>
                                    </div>
                                </article>
                            ))}
                        </div>

                    </section>

                    {/* SIDEBAR */}
                    <aside className="news-sidebar">
                        <h2>TIN ĐỌC NHIỀU</h2>

                        {newsData.map((news, index) => (
                            <div className="sidebar-item" key={news.id}>
                <span className="sidebar-number">
                  {index + 1}
                </span>

                                <p>{news.title}</p>
                            </div>
                        ))}
                    </aside>

                </div>
            </main>

            <footer className="category-footer">
                © 24h.com.vn - Trang tin tức tổng hợp
            </footer>

        </div>
    )
}

export default CategoryPage