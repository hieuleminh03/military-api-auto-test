# API Endpoint Description - Allowance

| Role    | Endpoint         | Method | Body (if any) | Description (VN)                       | Sample Res Data                  |
|---------|------------------|--------|---------------|----------------------------------------|----------------------------------|
| Student | /student/allowances | GET | | Lấy danh sách phụ cấp của học viên | [ { id, type, amount, ... } ] |
| Student | /student/allowances/:allowanceId | PUT | { status: string } | Cập nhật trạng thái phụ cấp (đã nhận/chưa nhận) <br><br>**Lưu ý:**<br>- Chỉ cập nhật trạng thái nhận.<br> | { message } |
| Admin | /allowances | GET | | Lấy danh sách phụ cấp | [ { id, type, amount, ... } ] |
| Admin | /allowances | POST | {<br>&nbsp;&nbsp;user_id: integer, // required, user phải tồn tại và là học viên<br>&nbsp;&nbsp;month: integer, // required, 1-12<br>&nbsp;&nbsp;year: integer, // required, 2000-2100<br>&nbsp;&nbsp;amount: number, // required, >= 0<br>&nbsp;&nbsp;notes?: string<br>} | Thêm phụ cấp <br><br>**Lưu ý:**<br>- Mỗi học viên chỉ có 1 phụ cấp/tháng/năm.<br>- Nếu đã tồn tại phụ cấp cho học viên/tháng/năm này sẽ không tạo mới.<br> | { id, ... } |
| Admin | /allowances/bulk | POST | {<br>&nbsp;&nbsp;student_ids: [integer], // required, mỗi phần tử phải là học viên<br>&nbsp;&nbsp;month: integer, // required, 1-12<br>&nbsp;&nbsp;year: integer, // required, 2000-2100<br>&nbsp;&nbsp;amount: number, // required, >= 0<br>} | Thêm nhiều phụ cấp <br><br>**Lưu ý:**<br>- Chỉ tạo cho học viên chưa có phụ cấp cùng tháng/năm.<br>- Các rule như thêm từng phụ cấp áp dụng cho từng phần tử.<br> | { message } |
| Admin | /allowances/:id | PUT | {<br>&nbsp;&nbsp;amount?: number, // nếu truyền, >= 0<br>&nbsp;&nbsp;notes?: string<br>} | Cập nhật phụ cấp <br><br>**Lưu ý:**<br>- Không thể cập nhật nếu phụ cấp đã được nhận.<br> | { id, ... } |
| Admin | /allowances/:id | DELETE | | Xóa phụ cấp <br><br>**Lưu ý:**<br>- Không thể xóa nếu phụ cấp đã được nhận.<br> | { message } |
| Admin | /allowances/pending | GET | | Lấy danh sách học viên chưa nhận phụ cấp | [ { id, name, ... } ] |
| Admin | /allowances/students/:studentId | GET | | Lấy phụ cấp của học viên | [ { id, type, amount, ... } ] |