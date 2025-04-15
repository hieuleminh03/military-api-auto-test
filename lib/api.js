import { post, get, put, del } from './request.js';
import { is_success } from './validator.js';
import endpoints from './endpoint.js';

export async function login(email, password) {
    const res = await post(endpoints.login, null, { email: email, password: password });
    if (!is_success(res)) {
        throw new Error("❌ Login failed: Invalid response");
    }
    console.log("✅ Login successful");
    return res.data.data;
}