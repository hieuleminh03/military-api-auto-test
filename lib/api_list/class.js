import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

// Admin class endpoints
async function get_all_classes(token) {
    const res = await get(endpoints.getAllClasses, token);
    if (!is_success(res)) {
        throw new Error("❌ Get all classes failed");
    }
    console.log("✅ Get all classes successful");
    return res.data.data;
}

async function create_class(token, name, academic_year, manager_id) {
    let body = {
        name: name,
        academic_year: academic_year,
        manager_id: manager_id
    };
    const res = await post(endpoints.createClass, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Create class failed");
    }
    console.log("✅ Create class successful");
    return res.data.data;
}

async function get_class(token, id) {
    const res = await get(endpoints.getClass.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Get class failed");
    }
    console.log("✅ Get class successful");
    return res.data.data;
}

async function update_class(token, id, name, academic_year, manager_id) {
    let body = {
        name: name,
        academic_year: academic_year,
        manager_id: manager_id
    };
    const res = await put(endpoints.updateClass.replace(':id', id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update class failed");
    }
    console.log("✅ Update class successful");
    return res.data.data;
}

async function delete_class(token, id) {
    const res = await del(endpoints.deleteClass.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Delete class failed");
    }
    console.log("✅ Delete class successful");
    return res.data.data;
}

async function add_student_to_class(token, class_id, student_id) {
    let body = {
        user_id: student_id
    };
    const res = await post(endpoints.addStudentToClass.replace(':classId', class_id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Add student to class failed");
    }
    console.log("✅ Add student to class successful");
    return res.data.data;
}

async function bulk_add_students_to_class(token, class_id, student_ids) {
    let body = {
        student_ids: student_ids
    };
    const res = await post(endpoints.bulkAddStudentsToClass.replace(':classId', class_id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Bulk add students to class failed");
    }
    console.log("✅ Bulk add students to class successful");
    return res.data.data;
}

async function get_student_class_detail(token, class_id, student_id) {
    const res = await get(
        endpoints.getStudentClassDetail
            .replace(':classId', class_id)
            .replace(':studentId', student_id), 
        token
    );
    if (!is_success(res)) {
        throw new Error("❌ Get student class detail failed");
    }
    console.log("✅ Get student class detail successful");
    return res.data.data;
}

async function update_student_in_class(token, class_id, student_id, role) {
    let body = {
        role: role
    };
    const res = await put(
        endpoints.updateStudentInClass
            .replace(':classId', class_id)
            .replace(':studentId', student_id), 
        token, 
        body
    );
    if (!is_success(res)) {
        throw new Error("❌ Update student in class failed");
    }
    console.log("✅ Update student in class successful");
    return res.data.data;
}

async function remove_student_from_class(token, class_id, student_id) {
    const res = await del(
        endpoints.removeStudentFromClass
            .replace(':classId', class_id)
            .replace(':studentId', student_id), 
        token
    );
    if (!is_success(res)) {
        throw new Error("❌ Remove student from class failed");
    }
    console.log("✅ Remove student from class successful");
    return res.data.data;
}

async function assign_monitor(token, class_id, student_id) {
    const res = await put(
        endpoints.assignMonitor
            .replace(':classId', class_id)
            .replace(':studentId', student_id), 
        token, 
        {}
    );
    if (!is_success(res)) {
        throw new Error("❌ Assign monitor failed");
    }
    console.log("✅ Assign monitor successful");
    return res.data.data;
}

async function assign_vice_monitor(token, class_id, student_id) {
    const res = await put(
        endpoints.assignViceMonitor
            .replace(':classId', class_id)
            .replace(':studentId', student_id), 
        token, 
        {}
    );
    if (!is_success(res)) {
        throw new Error("❌ Assign vice monitor failed");
    }
    console.log("✅ Assign vice monitor successful");
    return res.data.data;
}

async function assign_student(token, class_id, student_id) {
    const res = await put(
        endpoints.assignStudent
            .replace(':classId', class_id)
            .replace(':studentId', student_id), 
        token, 
        {}
    );
    if (!is_success(res)) {
        throw new Error("❌ Assign student role failed");
    }
    console.log("✅ Assign student role successful");
    return res.data.data;
}

// Manager class endpoints
async function manager_get_my_class(token) {
    const res = await get(endpoints.managerGetMyClass, token);
    if (!is_success(res)) {
        throw new Error("❌ Manager get my class failed");
    }
    console.log("✅ Manager get my class successful");
    return res.data.data;
}

async function manager_get_student_detail(token, student_id) {
    const res = await get(endpoints.managerGetStudentDetail.replace(':studentId', student_id), token);
    if (!is_success(res)) {
        throw new Error("❌ Manager get student detail failed");
    }
    console.log("✅ Manager get student detail successful");
    return res.data.data;
}

async function manager_update_student(token, student_id, data) {
    const res = await put(endpoints.managerUpdateStudent.replace(':studentId', student_id), token, data);
    if (!is_success(res)) {
        throw new Error("❌ Manager update student failed");
    }
    console.log("✅ Manager update student successful");
    return res.data.data;
}

async function manager_assign_monitor(token, student_id) {
    const res = await put(endpoints.managerAssignMonitor.replace(':studentId', student_id), token, {});
    if (!is_success(res)) {
        throw new Error("❌ Manager assign monitor failed");
    }
    console.log("✅ Manager assign monitor successful");
    return res.data.data;
}

async function manager_assign_vice_monitor(token, student_id) {
    const res = await put(endpoints.managerAssignViceMonitor.replace(':studentId', student_id), token, {});
    if (!is_success(res)) {
        throw new Error("❌ Manager assign vice monitor failed");
    }
    console.log("✅ Manager assign vice monitor successful");
    return res.data.data;
}

async function manager_assign_student(token, student_id) {
    const res = await put(endpoints.managerAssignStudent.replace(':studentId', student_id), token, {});
    if (!is_success(res)) {
        throw new Error("❌ Manager assign student role failed");
    }
    console.log("✅ Manager assign student role successful");
    return res.data.data;
}

// Student class endpoints
async function student_get_class(token) {
    const res = await get(endpoints.getStudentClass, token);
    if (!is_success(res)) {
        throw new Error("❌ Get student class failed");
    }
    console.log("✅ Get student class successful");
    return res.data.data;
}

async function student_get_classmates(token) {
    const res = await get(endpoints.getStudentClassmates, token);
    if (!is_success(res)) {
        throw new Error("❌ Get student classmates failed");
    }
    console.log("✅ Get student classmates successful");
    return res.data.data;
}

const classApi = {
    // Admin class APIs
    get_all_classes,
    create_class,
    get_class,
    update_class,
    delete_class,
    add_student_to_class,
    bulk_add_students_to_class,
    get_student_class_detail,
    update_student_in_class,
    remove_student_from_class,
    assign_monitor,
    assign_vice_monitor,
    assign_student,
    
    // Manager class APIs
    manager_get_my_class,
    manager_get_student_detail,
    manager_update_student,
    manager_assign_monitor,
    manager_assign_vice_monitor,
    manager_assign_student,
    
    // Student class APIs
    student_get_class,
    student_get_classmates
};

export default classApi;
