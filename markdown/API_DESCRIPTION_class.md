# API Endpoint Description - Class

| Role    | Endpoint         | Method | Body (if any) | Description (VN)                       | Sample Res Data                  |
|---------|------------------|--------|---------------|----------------------------------------|----------------------------------|
| Student | /student/class | GET | | Lấy thông tin lớp của học viên | { ...class } |
| Student | /student/class/classmates | GET | | Lấy danh sách bạn cùng lớp | [ { id, name, ... } ] |
| Manager | /manager/class | GET | | Lấy thông tin lớp quản lý | { ...class } |
| Manager | /manager/class/students/:studentId | GET | | Lấy chi tiết sinh viên trong lớp | { ...student } |
| Manager | /manager/class/students/:studentId | PUT | { ...updateFields } | Cập nhật thông tin sinh viên trong lớp | { message } |
| Manager | /manager/class/students/:studentId/assign-monitor | PUT | | Phân công lớp trưởng | { message } |
| Manager | /manager/class/students/:studentId/assign-vice-monitor | PUT | | Phân công lớp phó | { message } |
| Manager | /manager/class/students/:studentId/assign-student | PUT | | Phân công học viên | { message } |
| Admin | /classes | GET | | Lấy danh sách lớp học | [ { id, name, ... } ] |
| Admin | /classes | POST | {<br>&nbsp;&nbsp;name: string, // required, max 100 ký tự, duy nhất trong bảng classes<br>&nbsp;&nbsp;manager_id?: integer, // optional, phải là user có role=manager, và mỗi manager chỉ quản lý 1 lớp<br>} | Thêm mới lớp học <br><br>**Lưu ý:**<br>- `name` là duy nhất, tối đa 100 ký tự.<br>- Nếu truyền `manager_id`, user này phải có role=manager và chưa quản lý lớp nào khác.<br>- Khi gán manager, trường `managerDetail.management_unit` của manager sẽ được cập nhật theo tên lớp.<br> | { id, name, ... } |
| Admin | /classes/:id | GET | | Lấy thông tin một lớp học | { id, name, ... } |
| Admin | /classes/:id | PUT | {<br>&nbsp;&nbsp;name?: string, // optional, max 100 ký tự, duy nhất (trừ bản ghi hiện tại)<br>&nbsp;&nbsp;manager_id?: integer, // optional, phải là user có role=manager, và mỗi manager chỉ quản lý 1 lớp<br>} | Cập nhật lớp học <br><br>**Lưu ý:**<br>- Có thể gửi 1 phần các trường, nhưng mỗi trường đều phải tuân thủ các ràng buộc như khi tạo mới.<br>- Nếu thay đổi manager, manager mới phải chưa quản lý lớp nào khác, và trường `managerDetail.management_unit` sẽ được cập nhật.<br>- Nếu đổi manager, manager cũ sẽ bị xóa trường `management_unit`.<br> | { id, name, ... } |
| Admin | /classes/:id | DELETE | | Xóa lớp học <br><br>**Lưu ý:**<br>- Không thể xóa lớp nếu vẫn còn học viên trong lớp.<br> | { message } |
| Admin | /classes/:classId/students | POST | {<br>&nbsp;&nbsp;user_id: integer, // required, user phải có role=student, chưa thuộc lớp nào khác<br>&nbsp;&nbsp;role?: string, // optional, 'monitor' hoặc 'vice_monitor' hoặc 'student'<br>} | Thêm học viên vào lớp <br><br>**Lưu ý:**<br>- Một học viên chỉ thuộc 1 lớp.<br>- Nếu thêm với role='monitor', lớp chưa được có lớp trưởng.<br>- Nếu thêm với role='vice_monitor', số lượng lớp phó tối đa là 2.<br> | { message } |
| Admin | /classes/:classId/students/bulk | POST | [ { user_id: integer, ... } ] | Thêm nhiều học viên vào lớp <br><br>**Lưu ý:**<br>- Các rule như thêm từng học viên áp dụng cho từng phần tử.<br> | { message } |
| Admin | /classes/:classId/students/:studentId | GET | | Lấy chi tiết học viên trong lớp | { ...student } |
| Admin | /classes/:classId/students/:studentId | PUT | { ...updateFields } | Cập nhật thông tin học viên trong lớp | { message } |
| Admin | /classes/:classId/students/:studentId | DELETE | | Xóa học viên khỏi lớp | { message } |
| Admin | /classes/:classId/students/:studentId/assign-monitor | PUT | | Phân công lớp trưởng <br><br>**Lưu ý:**<br>- Mỗi lớp chỉ có 1 lớp trưởng.<br> | { message } |
| Admin | /classes/:classId/students/:studentId/assign-vice-monitor | PUT | | Phân công lớp phó <br><br>**Lưu ý:**<br>- Mỗi lớp tối đa 2 lớp phó.<br> | { message } |
| Admin | /classes/:classId/students/:studentId/assign-student | PUT | | Phân công học viên | { message } |