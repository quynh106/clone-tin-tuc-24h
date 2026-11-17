
export default function Header() {
    return (
        <header className="site-header">
            {/* Logo website */}
            <div className="site-header__top">
                <a href="/" className="site-header__logo">
                    24h.com.vn
                </a>
            </div>

            {/* Menu sẽ được bổ sung theo cấu hình chuyên mục */}
            <nav className="site-header__menu">
                <a href="/">Trang chủ</a>
            </nav>
        </header>
    );
}
