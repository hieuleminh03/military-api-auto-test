# API Endpoint Description - Auth

| Role   | Endpoint         | Method | Body (if any) | Description (VN)                       | Sample Res Data                  |
|--------|------------------|--------|---------------|----------------------------------------|----------------------------------|
| Public | /login           | POST   | {<br>&nbsp;&nbsp;email: string, // required, email hợp lệ<br>&nbsp;&nbsp;password: string, // required<br>} | Đăng nhập người dùng. Trả về token và thông tin user (role, id, email, name) <br><br>**Lưu ý:**<br>- Email và mật khẩu phải hợp lệ.<br>- Nếu đăng nhập sai quá nhiều lần có thể bị khóa tạm thời (nếu có cấu hình bảo mật).<br> | { token, user: { id, name, email, role } } |
| Admin  | /register        | POST   | {<br>&nbsp;&nbsp;name: string, // required<br>&nbsp;&nbsp;email: string, // required, email hợp lệ, duy nhất<br>&nbsp;&nbsp;password: string, // required, tối thiểu 6 ký tự<br>&nbsp;&nbsp;...<br>} | Đăng ký người dùng mới (chỉ admin). <br><br>**Lưu ý:**<br>- Email phải duy nhất.<br>- Mật khẩu tối thiểu 6 ký tự.<br>- Chỉ admin mới có quyền đăng ký.<br> | { user: { id, name, email, role }, message } |
| Any    | /auth/user       | GET    |               | Lấy thông tin người dùng hiện tại.     | { user: { id, name, email, role } } |
| Any    | /auth/logout     | POST   |               | Đăng xuất người dùng.                  | { message }                      |
| Any    | /auth-test       | GET    |               | Kiểm tra xác thực, trả về thông tin user nếu đã đăng nhập | { status, message, user } |