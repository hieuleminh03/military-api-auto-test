# API Endpoint Description - Miscellaneous (Dashboard, Reports, User/Manager Search)

| Role    | Endpoint         | Method | Body (if any) | Description (VN)                       | Sample Res Data                  |
|---------|------------------|--------|---------------|----------------------------------------|----------------------------------|
| Student | /student/dashboard | GET | | Lấy bảng điều khiển của học viên <br><br>**Lưu ý:**<br>- Trả về thông tin tổng quan cho học viên.<br> | { status, message } |
| Manager | /manager/dashboard | GET | | Lấy bảng điều khiển của quản lý <br><br>**Lưu ý:**<br>- Trả về thông tin tổng quan cho quản lý.<br> | { status, message } |
| Admin | /admin/dashboard | GET | | Lấy bảng điều khiển admin <br><br>**Lưu ý:**<br>- Trả về thông tin tổng quan cho admin.<br> | { status, message } |
| Manager, Admin | /reports | GET | | Lấy dữ liệu báo cáo <br><br>**Lưu ý:**<br>- Chỉ dành cho quản lý và admin.<br> | { status, message } |
| Manager | /manager/students | GET | | Lấy danh sách sinh viên quản lý <br><br>**Lưu ý:**<br>- Trả về danh sách sinh viên thuộc quyền quản lý.<br> | [ { id, name, ... } ] |
| Manager | /manager/students/search | POST | { ...searchParams } | Tìm kiếm sinh viên <br><br>**Lưu ý:**<br>- Cho phép tìm kiếm sinh viên theo các tiêu chí.<br> | [ { id, name, ... } ] |
| Admin | /admin/users | GET | | Lấy tất cả người dùng <br><br>**Lưu ý:**<br>- Trả về danh sách tất cả user trong hệ thống.<br> | [ { id, name, email, role, ... } ] |
| Admin | /admin/search/student | POST | { ...searchParams } | Tìm kiếm sinh viên (admin) <br><br>**Lưu ý:**<br>- Cho phép tìm kiếm sinh viên theo các tiêu chí.<br> | [ { id, name, ... } ] |
| Admin | /admin/managers | GET | | Lấy danh sách quản lý viên <br><br>**Lưu ý:**<br>- Trả về danh sách các manager.<br> | [ { id, name, ... } ] |
| Admin | /admin/managers/:id | GET | | Lấy chi tiết quản lý viên <br><br>**Lưu ý:**<br>- Trả về thông tin chi tiết của manager.<br> | { id, name, ... } |
| Admin | /admin/managers/:id | PUT | { ...updateFields } | Cập nhật thông tin quản lý viên <br><br>**Lưu ý:**<br>- Chỉ admin mới được cập nhật.<br> | { message } |