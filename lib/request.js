// lib/request.js
import axios from "axios";

const baseURL = "http://localhost:8000/api";

async function get(path, token) {
    const res = await axios.get(`${baseURL}${path}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return res;
}

async function post(path, token, body) {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const res = await axios.post(`${baseURL}${path}`, body, { headers });
    return res;
}

async function put(path, token, body) {
    const res = await axios.put(`${baseURL}${path}`, body, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return res;
}

async function del(path, token) {
    const res = await axios.delete(`${baseURL}${path}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return res;
}

export { get, post, put, del };
