import auth from './api_list/auth.js';
import term from './api_list/term.js';
import course from './api_list/course.js';
import classApi from './api_list/class.js';
import fitness from './api_list/fitness.js';
import violation from './api_list/violation.js';
import equipment from './api_list/equipment.js';
import allowance from './api_list/allowance.js';
import search from './api_list/search.js';
import profile from './api_list/profile.js';
import grade from './api_list/grade.js';
import manager from './api_list/manager.js';
import dashboard from './api_list/dashboard.js';
import studentCourse from './api_list/student_course.js';

const api = {
    auth,
    term,
    course,
    class: classApi,
    fitness,
    violation,
    equipment,
    allowance,
    search,
    profile,
    grade,
    manager,
    dashboard,
    studentCourse
};

export default api;
