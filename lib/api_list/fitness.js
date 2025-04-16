import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

// Admin fitness test endpoints
async function get_all_fitness_tests(token) {
    const res = await get(endpoints.getAllFitnessTests, token);
    if (!is_success(res)) {
        throw new Error("❌ Get all fitness tests failed");
    }
    console.log("✅ Get all fitness tests successful");
    return res.data.data;
}

async function create_fitness_test(token, name, description, unit_of_measure, higher_is_better, thresholds) {
    let body = {
        name: name,
        description: description,
        unit_of_measure: unit_of_measure,
        higher_is_better: higher_is_better,
        thresholds: thresholds
    };
    const res = await post(endpoints.createFitnessTest, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Create fitness test failed");
    }
    console.log("✅ Create fitness test successful");
    return res.data.data;
}

async function get_fitness_test(token, id) {
    const res = await get(endpoints.getFitnessTest.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Get fitness test failed");
    }
    console.log("✅ Get fitness test successful");
    return res.data.data;
}

async function update_fitness_test(token, id, name, description, unit_of_measure, higher_is_better, thresholds) {
    let body = {
        name: name,
        description: description,
        unit_of_measure: unit_of_measure,
        higher_is_better: higher_is_better,
        thresholds: thresholds
    };
    const res = await put(endpoints.updateFitnessTest.replace(':id', id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update fitness test failed");
    }
    console.log("✅ Update fitness test successful");
    return res.data.data;
}

async function delete_fitness_test(token, id) {
    const res = await del(endpoints.deleteFitnessTest.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Delete fitness test failed");
    }
    console.log("✅ Delete fitness test successful");
    return res.data.data;
}

// Manager fitness assessment endpoints
async function manager_get_all_fitness_tests(token) {
    const res = await get(endpoints.managerGetAllFitnessTests, token);
    if (!is_success(res)) {
        throw new Error("❌ Manager get all fitness tests failed");
    }
    console.log("✅ Manager get all fitness tests successful");
    return res.data.data;
}

async function manager_get_all_sessions(token) {
    const res = await get(endpoints.managerGetAllSessions, token);
    if (!is_success(res)) {
        throw new Error("❌ Manager get all sessions failed");
    }
    console.log("✅ Manager get all sessions successful");
    return res.data.data;
}

async function manager_get_current_week_session(token) {
    const res = await get(endpoints.managerGetCurrentWeekSession, token);
    if (!is_success(res)) {
        throw new Error("❌ Manager get current week session failed");
    }
    console.log("✅ Manager get current week session successful");
    return res.data.data;
}

async function manager_get_session_assessments(token, sessionId) {
    const res = await get(endpoints.managerGetSessionAssessments.replace(':sessionId', sessionId), token);
    if (!is_success(res)) {
        throw new Error("❌ Manager get session assessments failed");
    }
    console.log("✅ Manager get session assessments successful");
    return res.data.data;
}

async function manager_record_assessment(token, session_id, student_id, test_id, score, notes) {
    let body = {
        session_id: session_id,
        student_id: student_id,
        test_id: test_id,
        score: score,
        notes: notes
    };
    const res = await post(endpoints.managerRecordAssessment, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Manager record assessment failed");
    }
    console.log("✅ Manager record assessment successful");
    return res.data.data;
}

async function manager_batch_record_assessments(token, records) {
    let body = {
        records: records
    };
    const res = await post(endpoints.managerBatchRecordAssessments, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Manager batch record assessments failed");
    }
    console.log("✅ Manager batch record assessments successful");
    return res.data.data;
}

// Student fitness endpoints
async function student_get_fitness_assessments(token) {
    const res = await get(endpoints.getStudentFitnessAssessments, token);
    if (!is_success(res)) {
        throw new Error("❌ Student get fitness assessments failed");
    }
    console.log("✅ Student get fitness assessments successful");
    return res.data.data;
}

const fitness = {
    // Admin fitness test APIs
    get_all_fitness_tests,
    create_fitness_test,
    get_fitness_test,
    update_fitness_test,
    delete_fitness_test,
    
    // Manager fitness assessment APIs
    manager_get_all_fitness_tests,
    manager_get_all_sessions,
    manager_get_current_week_session,
    manager_get_session_assessments,
    manager_record_assessment,
    manager_batch_record_assessments,
    
    // Student fitness APIs
    student_get_fitness_assessments
};

export default fitness;
