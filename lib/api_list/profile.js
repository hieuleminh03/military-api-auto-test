import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

// Student profile endpoints
async function get_student_profile(token) {
    const res = await get(endpoints.getStudentProfile, token);
    if (!is_success(res)) {
        throw new Error("❌ Get student profile failed");
    }
    console.log("✅ Get student profile successful");
    return res.data.data;
}

const profile = {
    // Student profile APIs
    get_student_profile
};

export default profile;
