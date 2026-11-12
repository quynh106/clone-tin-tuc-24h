# Clone Tin Tức 24h

Bài tập lớn môn Lập trình Front-End — xây dựng website tin tức lấy cảm hứng từ 24h.com.vn bằng ReactJS.

## 1. Mục tiêu

- Xây dựng giao diện website tin tức bằng ReactJS.
- Hiển thị tin tức từ RSS sau khi xác minh nguồn dữ liệu.
- Sử dụng React Router để điều hướng giữa các trang.
- Thực hành làm việc nhóm và quản lý mã nguồn bằng GitHub.

## 2. Phạm vi dự án

- Trang chủ (HomePage).
- Trang chuyên mục (CategoryPage).
- Trang chi tiết bài viết (ArticlePage).
- Các component giao diện dùng chung.

## 3. Công nghệ

- ReactJS
- Vite
- JavaScript
- React Router
- HTML, CSS
- RSS

## 4. Cài đặt và chạy dự án

Yêu cầu: Node.js và npm đã được cài đặt.

```bash
npm install
npm run dev
```

Mở địa chỉ localhost do Vite hiển thị trong Terminal.

## 5. Phân công thành viên

### Thành viên A

- Xử lý RSS và dữ liệu tin tức.
- Xây dựng services, hooks và utils liên quan.
- Xây dựng trang chi tiết bài viết.

### Thành viên B

- Xây dựng router và cấu hình chuyên mục.
- Xây dựng Header, menu, Footer và layout.
- Xây dựng trang chuyên mục.

### Thành viên C

- Xây dựng trang chủ.
- Xây dựng ArticleCard và các component dùng chung.
- Phụ trách CSS và giao diện responsive.

## 6. Quy tắc làm việc với Git

- Không push trực tiếp lên nhánh main.
- Mỗi người tạo một branch riêng.
- Tạo Pull Request (PR) để đưa code vào main.
- Nhờ ít nhất một thành viên khác review trước khi merge.
- Không tự ý ghi đè hoặc xóa code của thành viên khác.
- Báo nhóm trước khi chỉnh sửa file dùng chung như router.jsx và package.json.
- Commit theo mẫu: feat:, fix:, style:, refactor:, docs:.

## 7. Trạng thái

Dự án đã khởi tạo bằng React và Vite. Các trang, chức năng RSS và giao diện sẽ được phát triển theo từng giai đoạn.
