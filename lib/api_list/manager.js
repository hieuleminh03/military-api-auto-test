import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

// Admin manager endpoints
async function get_all_managers(token) {
    const res = await get(endpoints.getAllManagers, token);
    if (!is_success(res)) {
        throw new Error("❌ Get all managers failed");
    }
    console.log("✅ Get all managers successful");
    return res.data.data;
}

async function get_manager_detail(token, id) {
    const res = await get(endpoints.getManagerDetail.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Get manager detail failed");
    }
    console.log("✅ Get manager detail successful");
    return res.data.data;
}

async function update_manager_detail(token, id, data) {
    const res = await put(endpoints.updateManagerDetail.replace(':id', id), token, data);
    if (!is_success(res)) {
        throw new Error("❌ Update manager detail failed");
    }
    console.log("✅ Update manager detail successful");
    return res.data.data;
}

const manager = {
    // Admin manager APIs
    get_all_managers,
    get_manager_detail,
    update_manager_detail
};

export default manager;
