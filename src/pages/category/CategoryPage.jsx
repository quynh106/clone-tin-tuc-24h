
import { useParams } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";

export default function CategoryPage() {
    const { categoryPage } = useParams();

    return (
        <>
            <CategoryHeader />

            <main className="page-placeholder">
                <h1>Trang chuyên mục</h1>
                <p>Đường dẫn: {categoryPage}</p>
            </main>
        </>
    );
}
