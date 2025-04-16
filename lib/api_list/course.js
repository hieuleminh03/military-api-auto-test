import { post, get, put, del } from './../request.js';
import { is_success } from './../validator.js';
import endpoints from './../endpoint.js';

async function get_all_courses(token) {
    const res = await get(endpoints.getAllCourses, token);
    if (!is_success(res)) {
        throw new Error("❌ Get all courses failed");
    }
    console.log("✅ Get all courses successful");
    return res.data.data;
}

async function get_all_courses_by_term(token, id) {
    const res = await get(endpoints.getAllCoursesByTerm.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Get all courses by term failed");
    }
    console.log("✅ Get all courses by term successful");
    return res.data.data;
}

async function get_course(token, id) {
    const res = await get(endpoints.getCourse.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Get course failed");
    }
    console.log("✅ Get course successful");
    return res.data.data;
}

async function create_course(token, subject_name, term_id, enroll_limit, midterm_weight) {
    let body = {
        subject_name: subject_name,
        term_id: term_id,
        enroll_limit: enroll_limit,
        midterm_weight: midterm_weight,
    }
    const res = await post(endpoints.createCourse, token, body);
    if (!is_success(res)) {
        throw new Error("❌ Create course failed");
    }
    console.log("✅ Create course successful");
    return res.data.data;
}

async function update_course(token, id, subject_name, term_id, enroll_limit, midterm_weight) {
    let body = {
        subject_name: subject_name,
        term_id: term_id,
        enroll_limit: enroll_limit,
        midterm_weight: midterm_weight,
    }
    const res = await put(endpoints.updateCourse.replace(':id', id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update course failed");
    }
    console.log("✅ Update course successful");
    return res.data.data;
}

async function delete_course(token, id) {
    const res = await del(endpoints.deleteCourse.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Delete course failed");
    }
    console.log("✅ Delete course successful");
    return res.data.data;
}

async function get_students_in_course(token, id) {
    const res = await get(endpoints.getStudentsInCourse.replace(':id', id), token);
    if (!is_success(res)) {
        throw new Error("❌ Get students in course failed");
    }
    console.log("✅ Get students in course successful");
    return res.data.data;
}

async function enroll_student(token, id, student_id) {
    let body = {
        user_id: student_id,
    }
    const res = await post(endpoints.enrollStudent.replace(':id', id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Enroll student failed");
    }
    console.log("✅ Enroll student successful");
    return res.data.data;
}

async function enroll_student_by_bulk(token, id, student_ids) {
    let body = {
        student_ids: student_ids,
    }
    const res = await post(endpoints.enrollStudentByBulk.replace(':id', id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Enroll student by bulk failed");
    }
    console.log("✅ Enroll student by bulk successful");
    return res.data.data;
}

async function unenroll_student(token, id, student_id) {
    const res = await del(endpoints.unenrollStudent.replace(':id', id).replace(':studentId', student_id), token);
    if (!is_success(res)) {
        throw new Error("❌ Unenroll student failed");
    }
    console.log("✅ Unenroll student successful");
    return res.data.data;
}

async function update_student_grade(token, id, student_id, midterm_grade, final_grade, notes) {
    let body = {
        midterm_grade: midterm_grade,
        final_grade: final_grade,
        notes: notes,
    }
    const res = await put(endpoints.updateStudentGrade.replace(':id', id).replace(':studentId', student_id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update student grade failed");
    }
    console.log("✅ Update student grade successful");
    return res.data.data;
}

async function update_student_grades_by_bulk(token, id, grades) {
    let body = {
        grades: grades
    }
    const res = await put(endpoints.updateStudentGradesByBulk.replace(':id', id), token, body);
    if (!is_success(res)) {
        throw new Error("❌ Update student grades by bulk failed");
    }
    console.log("✅ Update student grades by bulk successful");
    return res.data.data;
}

const course = {
    get_all_courses,
    get_all_courses_by_term,
    get_course,
    create_course,
    update_course,
    delete_course,
    get_students_in_course,
    enroll_student,
    enroll_student_by_bulk,
    unenroll_student,
    update_student_grade,
    update_student_grades_by_bulk,
};

export default course;