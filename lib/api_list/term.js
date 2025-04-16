import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

async function get_all_terms(token) {
    const res = await get(endpoints.getAllTerms, token);
    if (!is_success(res)) {
        throw new Error("❌ Get all terms failed");
    }
    console.log("✅ Get all terms successful");
    return res.data.data;
}

async function get_term(token, id) {
    const res = await get(endpoints.getTerm.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Get term failed");
    }
    console.log("✅ Get term successful");
    return res.data.data;
}

async function create_term(token, name, start_date, end_date, roster_deadline, grade_entry_date) {
    let body = {
        name: name,
        start_date: start_date,
        end_date: end_date,
        roster_deadline: roster_deadline,
        grade_entry_date: grade_entry_date,
    }
    const res = await post(endpoints.createTerm, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Create term failed");
    }
    console.log("✅ Create term successful");
    return res.data.data;
}

async function update_term(token, id, name, start_date, end_date, roster_deadline, grade_entry_date) {
    let body = {
        name: name,
        start_date:     start_date,
        end_date: end_date,
        roster_deadline: roster_deadline,
        grade_entry_date: grade_entry_date,
    }
    const res = await put(endpoints.updateTerm.replace(':id', id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update term failed");
    }
    console.log("✅ Update term successful");
    return res.data.data;
}

async function delete_term(token, id) {
    const res = await del(endpoints.deleteTerm.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Delete term failed");
    }
    console.log("✅ Delete term successful");
    return res.data.data;
}

const term = {
    get_all_terms,
    get_term,
    create_term,
    update_term,
    delete_term,
};

export default term;