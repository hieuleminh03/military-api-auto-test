# API Endpoint Description - Fitness

| Role    | Endpoint         | Method | Body (if any) | Description (VN)                       | Sample Res Data                  |
|---------|------------------|--------|---------------|----------------------------------------|----------------------------------|
| Student | /student/fitness-assessments | GET | | Lấy đánh giá thể lực của học viên | [ { id, date, result, ... } ] |
| Manager | /manager/fitness/tests | GET | | Lấy danh sách bài kiểm tra thể lực | [ { id, name, ... } ] |
| Manager | /manager/fitness/sessions | GET | | Lấy danh sách buổi kiểm tra thể lực | [ { id, date, ... } ] |
| Manager | /manager/fitness/current-session | GET | | Lấy buổi kiểm tra thể lực hiện tại | { id, date, ... } |
| Manager | /manager/fitness/sessions/:sessionId/assessments | GET | | Lấy đánh giá thể lực của buổi kiểm tra | [ { id, student_id, result, ... } ] |
| Manager | /manager/fitness/assessments | POST | { ...assessment } | Ghi nhận đánh giá thể lực | { id, ... } |
| Manager | /manager/fitness/assessments/batch | POST | [ { ...assessment } ] | Ghi nhận nhiều đánh giá thể lực | { message } |
| Admin | /fitness-tests | GET | | Lấy danh sách bài kiểm tra thể lực | [ { id, name, ... } ] |
| Admin | /fitness-tests | POST | {<br>&nbsp;&nbsp;name: string, // required, max 255 ký tự<br>&nbsp;&nbsp;unit: string, // required, max 50 ký tự<br>&nbsp;&nbsp;higher_is_better?: boolean, // optional<br>&nbsp;&nbsp;excellent_threshold: number, // required<br>&nbsp;&nbsp;good_threshold: number, // required<br>&nbsp;&nbsp;pass_threshold: number, // required<br>} | Thêm mới bài kiểm tra thể lực <br><br>**Lưu ý:**<br>- Nếu `higher_is_better` là true: excellent > good > pass.<br>- Nếu `higher_is_better` là false: excellent < good < pass.<br>- Các ngưỡng đều là số.<br> | { id, name, ... } |
| Admin | /fitness-tests/:id | GET | | Lấy thông tin một bài kiểm tra thể lực | { id, name, ... } |
| Admin | /fitness-tests/:id | PUT | {<br>&nbsp;&nbsp;name?: string, // max 255 ký tự<br>&nbsp;&nbsp;unit?: string, // max 50 ký tự<br>&nbsp;&nbsp;higher_is_better?: boolean<br>&nbsp;&nbsp;excellent_threshold?: number<br>&nbsp;&nbsp;good_threshold?: number<br>&nbsp;&nbsp;pass_threshold?: number<br>} | Cập nhật bài kiểm tra thể lực <br><br>**Lưu ý:**<br>- Nếu truyền các ngưỡng, phải đảm bảo đúng thứ tự như khi tạo mới.<br> | { id, name, ... } |
| Admin | /fitness-tests/:id | DELETE | | Xóa bài kiểm tra thể lực | { message } |