# API Endpoint Description - Equipment

| Role    | Endpoint         | Method | Body (if any) | Description (VN)                       | Sample Res Data                  |
|---------|------------------|--------|---------------|----------------------------------------|----------------------------------|
| Student | /student/equipment | GET | | Lấy danh sách quân tư trang của học viên | [ { id, type, status, ... } ] |
| Student | /student/equipment/:receiptId | PUT | { received: boolean, notes?: string } | Cập nhật trạng thái biên nhận quân tư trang <br><br>**Lưu ý:**<br>- Chỉ cập nhật trạng thái nhận và ghi chú.<br> | { message } |
| Admin | /equipment/types | GET | | Lấy danh sách loại quân tư trang | [ { id, name, ... } ] |
| Admin | /equipment/types | POST | { name: string, // required, max 255 ký tự<br>description?: string } | Thêm loại quân tư trang <br><br>**Lưu ý:**<br>- Tên không được để trống, tối đa 255 ký tự.<br> | { id, name, ... } |
| Admin | /equipment/types/:id | PUT | { name: string, // required, max 255 ký tự<br>description?: string } | Cập nhật loại quân tư trang <br><br>**Lưu ý:**<br>- Tên không được để trống, tối đa 255 ký tự.<br> | { id, name, ... } |
| Admin | /equipment/types/:id | DELETE | | Xóa loại quân tư trang <br><br>**Lưu ý:**<br>- Nên kiểm tra trước khi xóa nếu loại này đã được sử dụng trong phân phối.<br> | { message } |
| Admin | /equipment/distributions | GET | | Lấy danh sách phân phối quân tư trang | [ { id, ... } ] |
| Admin | /equipment/distributions | POST | { equipment_type_id: integer, // required<br>year: integer, // required<br>quantity: integer, // required, >= 1<br>notes?: string } | Thêm phân phối quân tư trang <br><br>**Lưu ý:**<br>- Mỗi loại quân tư trang có thể có nhiều phân phối theo năm.<br> | { id, ... } |
| Admin | /equipment/distributions/:id | PUT | { quantity?: integer, // nếu truyền, >= 1<br>notes?: string } | Cập nhật phân phối quân tư trang | { id, ... } |
| Admin | /equipment/distributions/:id | DELETE | | Xóa phân phối quân tư trang <br><br>**Lưu ý:**<br>- Nên kiểm tra trước khi xóa nếu đã có biên nhận cho phân phối này.<br> | { message } |
| Admin | /equipment/receipts | POST | { distribution_id: integer, // required<br>student_ids: [integer], // required, mỗi phần tử là học viên<br>} | Tạo biên nhận quân tư trang cho học viên <br><br>**Lưu ý:**<br>- Mỗi học viên chỉ có 1 biên nhận cho mỗi phân phối.<br>- Nếu đã có biên nhận sẽ không tạo mới.<br> | { message } |
| Admin | /equipment/pending | GET | | Lấy danh sách học viên chưa nhận quân tư trang | [ { id, name, ... } ] |
| Admin | /equipment/students/:studentId | GET | | Lấy quân tư trang của học viên | [ { id, type, ... } ] |