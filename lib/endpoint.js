const ENDPOINTS = {
    // Auth endpoints
    "login": "/login",
    "register": "/register",
    "logout": "/logout",
    "getUser": "/user",
    
    // Term endpoints
    "getAllTerms": "/terms",
    "getTerm": "/terms/:id",
    "createTerm": "/terms",
    "updateTerm": "/terms/:id",
    "deleteTerm": "/terms/:id",

    // Course endpoints
    "getAllCourses": "/courses",
    "getAllCoursesByTerm": "/courses/getAllByTerm/:id",
    "getCourse": "/courses/:id",
    "createCourse": "/courses",
    "updateCourse": "/courses/:id", 
    "deleteCourse": "/courses/:id",

    "getStudentsInCourse": "/courses/:id/students",
    "enrollStudent": "/courses/:id/students",
    "enrollStudentByBulk": "/courses/:id/students/bulk",
    "unenrollStudent": "/courses/:id/students/:studentId",
    "updateStudentGrade": "/courses/:id/students/:studentId/grade",
    "updateStudentGradesByBulk": "/courses/:id/grades/bulk",

};

export default ENDPOINTS;
