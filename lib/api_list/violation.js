import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

// Manager violation endpoints
async function get_student_violations(token, student_id) {
    const res = await get(endpoints.getStudentViolations.replace(':studentId', student_id), token);
    if (!is_success(res)) {
        throw new Error("❌ Get student violations failed");
    }
    console.log("✅ Get student violations successful");
    return res.data.data;
}

async function create_violation(token, student_id, violation_type, description, date, points, disciplinary_action) {
    let body = {
        student_id: student_id,
        violation_type: violation_type,
        description: description,
        date: date,
        points: points,
        disciplinary_action: disciplinary_action
    };
    const res = await post(endpoints.createViolation, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Create violation failed");
    }
    console.log("✅ Create violation successful");
    return res.data.data;
}

async function update_violation(token, id, violation_type, description, date, points, disciplinary_action) {
    let body = {
        violation_type: violation_type,
        description: description,
        date: date,
        points: points,
        disciplinary_action: disciplinary_action
    };
    const res = await put(endpoints.updateViolation.replace(':id', id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update violation failed");
    }
    console.log("✅ Update violation successful");
    return res.data.data;
}

async function delete_violation(token, id) {
    const res = await del(endpoints.deleteViolation.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Delete violation failed");
    }
    console.log("✅ Delete violation successful");
    return res.data.data;
}

// Student violation endpoints
async function student_get_my_violations(token) {
    const res = await get(endpoints.getStudentMyViolations, token);
    if (!is_success(res)) {
        throw new Error("❌ Student get my violations failed");
    }
    console.log("✅ Student get my violations successful");
    return res.data.data;
}

const violation = {
    // Manager violation APIs
    get_student_violations,
    create_violation,
    update_violation,
    delete_violation,
    
    // Student violation APIs
    student_get_my_violations
};

export default violation;
