import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

// Admin allowance endpoints
async function get_allowances(token) {
    const res = await get(endpoints.getAllowances, token);
    if (!is_success(res)) {
        throw new Error("❌ Get allowances failed");
    }
    console.log("✅ Get allowances successful");
    return res.data.data;
}

async function create_allowance(token, student_id, amount, month, year, status, note) {
    let body = {
        student_id: student_id,
        amount: amount,
        month: month,
        year: year,
        status: status,
        note: note
    };
    const res = await post(endpoints.createAllowance, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Create allowance failed");
    }
    console.log("✅ Create allowance successful");
    return res.data.data;
}

async function create_bulk_allowances(token, allowances) {
    let body = {
        allowances: allowances
    };
    const res = await post(endpoints.createBulkAllowances, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Create bulk allowances failed");
    }
    console.log("✅ Create bulk allowances successful");
    return res.data.data;
}

async function update_allowance(token, id, amount, month, year, status, note) {
    let body = {
        amount: amount,
        month: month,
        year: year,
        status: status,
        note: note
    };
    const res = await put(endpoints.updateAllowance.replace(':id', id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update allowance failed");
    }
    console.log("✅ Update allowance successful");
    return res.data.data;
}

async function delete_allowance(token, id) {
    const res = await del(endpoints.deleteAllowance.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Delete allowance failed");
    }
    console.log("✅ Delete allowance successful");
    return res.data.data;
}

async function get_students_with_pending_allowances(token) {
    const res = await get(endpoints.getStudentsWithPendingAllowances, token);
    if (!is_success(res)) {
        throw new Error("❌ Get students with pending allowances failed");
    }
    console.log("✅ Get students with pending allowances successful");
    return res.data.data;
}

async function get_student_allowances(token, student_id) {
    const res = await get(endpoints.getStudentAllowances.replace(':studentId', student_id), token);
    if (!is_success(res)) {
        throw new Error("❌ Get student allowances failed");
    }
    console.log("✅ Get student allowances successful");
    return res.data.data;
}

// Student allowance endpoints
async function student_get_my_allowances(token) {
    const res = await get(endpoints.getStudentMyAllowances, token);
    if (!is_success(res)) {
        throw new Error("❌ Student get my allowances failed");
    }
    console.log("✅ Student get my allowances successful");
    return res.data.data;
}

async function update_student_allowance_status(token, allowance_id, status) {
    let body = {
        status: status
    };
    const res = await put(endpoints.updateStudentAllowanceStatus.replace(':allowanceId', allowance_id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update student allowance status failed");
    }
    console.log("✅ Update student allowance status successful");
    return res.data.data;
}

const allowance = {
    // Admin allowance APIs
    get_allowances,
    create_allowance,
    create_bulk_allowances,
    update_allowance,
    delete_allowance,
    get_students_with_pending_allowances,
    get_student_allowances,
    
    // Student allowance APIs
    student_get_my_allowances,
    update_student_allowance_status
};

export default allowance;
