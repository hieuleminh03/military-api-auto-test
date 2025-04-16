import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

// Student course endpoints
async function get_student_courses(token) {
    const res = await get(endpoints.getStudentCourses, token);
    if (!is_success(res)) {
        throw new Error("❌ Get student courses failed");
    }
    console.log("✅ Get student courses successful");
    return res.data.data;
}

const studentCourse = {
    get_student_courses
};

export default studentCourse;
