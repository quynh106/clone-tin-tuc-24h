
import { Link } from "react-router-dom";
import styles from "./category-header.module.css";

const menuItems = [
    { label: "Tin tức", path: "/tin-tuc" },
    { label: "Bóng đá", path: "/bong-da" },
    { label: "Kinh doanh", path: "/kinh-doanh" },
    { label: "Giải trí", path: "/giai-tri" },
    { label: "Sức khỏe", path: "/suc-khoe" },
    { label: "Thế giới", path: "/the-gioi" },
    { label: "Công nghệ", path: "/cong-nghe" },
];

export default function CategoryHeader() {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <Link to="/" className={styles.logo}>
                    24h
                </Link>

                <nav className={styles.menu}>
                    {menuItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={styles.menuItem}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
