import "./Header.css";


import { Link } from "react-router-dom";
import { CATEGORIES } from "../../config/categories";
import "./Header.css";

export default function Header() {
    return (
        <header className="site-header">
            <div className="site-header__top">
                <Link to="/" className="site-header__logo">
                    24h.com.vn
                </Link>
            </div>

            <nav className="site-header__menu">
                <Link to="/" className="menu-link">
                    Trang chủ
                </Link>

                {CATEGORIES.map((category) => (
                    <Link
                        key={category.id}
                        to={category.path}
                        className="menu-link"
                    >
                        {category.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
