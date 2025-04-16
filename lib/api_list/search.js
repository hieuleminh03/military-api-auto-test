import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

// Admin search endpoints
async function admin_search_students(token, query) {
    let body = {
        query: query
    };
    const res = await post(endpoints.adminSearchStudents, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Admin search students failed");
    }
    console.log("✅ Admin search students successful");
    return res.data.data;
}

// Manager search endpoints
async function manager_search_students(token, query) {
    let body = {
        query: query
    };
    const res = await post(endpoints.managerSearchStudents, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Manager search students failed");
    }
    console.log("✅ Manager search students successful");
    return res.data.data;
}

const search = {
    // Admin search APIs
    admin_search_students,
    
    // Manager search APIs
    manager_search_students
};

export default search;
