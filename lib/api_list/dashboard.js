import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

// Admin dashboard endpoints
async function get_admin_dashboard(token) {
    const res = await get(endpoints.adminDashboard, token);
    if (!is_success(res)) {
        throw new Error("❌ Get admin dashboard failed");
    }
    console.log("✅ Get admin dashboard successful");
    return res.data.data;
}

// Manager dashboard endpoints
async function get_manager_dashboard(token) {
    const res = await get(endpoints.managerDashboard, token);
    if (!is_success(res)) {
        throw new Error("❌ Get manager dashboard failed");
    }
    console.log("✅ Get manager dashboard successful");
    return res.data.data;
}

// Student dashboard endpoints
async function get_student_dashboard(token) {
    const res = await get(endpoints.studentDashboard, token);
    if (!is_success(res)) {
        throw new Error("❌ Get student dashboard failed");
    }
    console.log("✅ Get student dashboard successful");
    return res.data.data;
}

// Reports endpoint (shared between Manager and Admin)
async function get_reports(token) {
    const res = await get(endpoints.getReports, token);
    if (!is_success(res)) {
        throw new Error("❌ Get reports failed");
    }
    console.log("✅ Get reports successful");
    return res.data.data;
}

const dashboard = {
    // Admin dashboard API
    get_admin_dashboard,
    
    // Manager dashboard API
    get_manager_dashboard,
    
    // Student dashboard API
    get_student_dashboard,
    
    // Reports API
    get_reports
};

export default dashboard;
