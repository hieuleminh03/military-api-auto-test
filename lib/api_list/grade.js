import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

// Student grade endpoints
async function get_student_grades(token) {
    const res = await get(endpoints.getStudentGrades, token);
    if (!is_success(res)) {
        throw new Error("❌ Get student grades failed");
    }
    console.log("✅ Get student grades successful");
    return res.data.data;
}

const grade = {
    // Student grade APIs
    get_student_grades
};

export default grade;
