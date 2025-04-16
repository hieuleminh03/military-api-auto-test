import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

async function login(email, password) {
    let body = {
        email: email,
        password: password,
    }
    const res = await post(endpoints.login, null, body);
    if (!is_success(res)) {
        throw new Error("❌ Login failed");
    }
    console.log("✅ Login successful");
    return res.data.data;
}

async function register(token, name, email, password, role) {
    let body = {
        name: name,
        email: email,
        password: password,
        role: role,
    }
    const res = await post(endpoints.register, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Registration failed");
    }
    console.log("✅ Registration successful");
    return res.data.data;
}

async function logout(token) {
    const res = await post(endpoints.logout, token, null);
    if (!is_success(res)) {
        throw new Error("❌ Logout failed");
    }
    console.log("✅ Logout successful");
    return res.data.data;
}

async function get_user(token) {
    const res = await get(endpoints.getUser, token);
    if (!is_success(res)) {
        throw new Error("❌ Get user failed");
    }
    console.log("✅ Get user successful");
    return res.data.data;
}

const auth = {
    login,
    register,
    logout,
    get_user,
};

export default auth;