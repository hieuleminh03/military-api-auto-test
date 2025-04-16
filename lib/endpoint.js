const ENDPOINTS = {
    // Auth endpoints
    "login": "/login",
    "register": "/register",
    "logout": "/auth/logout",
    "getUser": "/auth/user",
    "authTest": "/auth-test",
    
    // Term endpoints (Admin)
    "getAllTerms": "/terms",
    "getTerm": "/terms/:id",
    "createTerm": "/terms",
    "updateTerm": "/terms/:id",
    "deleteTerm": "/terms/:id",

    // Course endpoints (Admin)
    "getAllCourses": "/courses",
    "getAllCoursesByTerm": "/courses/getAllByTerm/:id",
    "getCourse": "/courses/:id",
    "createCourse": "/courses",
    "updateCourse": "/courses/:id", 
    "deleteCourse": "/courses/:id",
    "getStudentsInCourse": "/courses/:id/students",
    "enrollStudent": "/courses/:id/students",
    "enrollStudentByBulk": "/courses/:id/students/bulk",
    "unenrollStudent": "/courses/:courseId/students/:userId",
    "updateStudentGrade": "/courses/:courseId/students/:userId/grade",
    "updateStudentGradesByBulk": "/courses/:id/grades/bulk",

    // Class endpoints (Admin)
    "getAllClasses": "/classes",
    "createClass": "/classes",
    "getClass": "/classes/:id",
    "updateClass": "/classes/:id",
    "deleteClass": "/classes/:id",
    "addStudentToClass": "/classes/:classId/students",
    "bulkAddStudentsToClass": "/classes/:classId/students/bulk",
    "getStudentClassDetail": "/classes/:classId/students/:studentId",
    "updateStudentInClass": "/classes/:classId/students/:studentId",
    "removeStudentFromClass": "/classes/:classId/students/:studentId",
    "assignMonitor": "/classes/:classId/students/:studentId/assign-monitor",
    "assignViceMonitor": "/classes/:classId/students/:studentId/assign-vice-monitor",
    "assignStudent": "/classes/:classId/students/:studentId/assign-student",

    // Fitness test endpoints (Admin)
    "getAllFitnessTests": "/fitness-tests",
    "createFitnessTest": "/fitness-tests",
    "getFitnessTest": "/fitness-tests/:id",
    "updateFitnessTest": "/fitness-tests/:id",
    "deleteFitnessTest": "/fitness-tests/:id",

    // Equipment endpoints (Admin)
    "getAllEquipmentTypes": "/equipment/types",
    "createEquipmentType": "/equipment/types",
    "updateEquipmentType": "/equipment/types/:id",
    "deleteEquipmentType": "/equipment/types/:id",
    "getDistributions": "/equipment/distributions",
    "createDistribution": "/equipment/distributions",
    "updateDistribution": "/equipment/distributions/:id",
    "deleteDistribution": "/equipment/distributions/:id",
    "createReceipts": "/equipment/receipts",
    "getStudentsWithPendingEquipment": "/equipment/pending",
    "getStudentEquipment": "/equipment/students/:studentId",

    // Allowance endpoints (Admin)
    "getAllowances": "/allowances",
    "createAllowance": "/allowances",
    "createBulkAllowances": "/allowances/bulk",
    "updateAllowance": "/allowances/:id",
    "deleteAllowance": "/allowances/:id",
    "getStudentsWithPendingAllowances": "/allowances/pending",
    "getStudentAllowances": "/allowances/students/:studentId",

    // Search endpoints (Admin)
    "adminSearchStudents": "/admin/search/student",

    // Manager endpoints (Admin)
    "getAllManagers": "/admin/managers",
    "getManagerDetail": "/admin/managers/:id",
    "updateManagerDetail": "/admin/managers/:id",

    // Dashboard endpoints
    "adminDashboard": "/admin/dashboard",
    "managerDashboard": "/manager/dashboard",
    "studentDashboard": "/student/dashboard",

    // Manager specific endpoints
    "managerGetMyClass": "/manager/class",
    "managerGetStudentDetail": "/manager/class/students/:studentId",
    "managerUpdateStudent": "/manager/class/students/:studentId",
    "managerAssignMonitor": "/manager/class/students/:studentId/assign-monitor",
    "managerAssignViceMonitor": "/manager/class/students/:studentId/assign-vice-monitor",
    "managerAssignStudent": "/manager/class/students/:studentId/assign-student",
    "managerSearchStudents": "/manager/students/search",
    
    // Manager violation endpoints
    "getStudentViolations": "/manager/violations/student/:studentId",
    "createViolation": "/manager/violations",
    "updateViolation": "/manager/violations/:id",
    "deleteViolation": "/manager/violations/:id",
    
    // Manager fitness assessment endpoints
    "managerGetAllFitnessTests": "/manager/fitness/tests",
    "managerGetAllSessions": "/manager/fitness/sessions",
    "managerGetCurrentWeekSession": "/manager/fitness/current-session",
    "managerGetSessionAssessments": "/manager/fitness/sessions/:sessionId/assessments",
    "managerRecordAssessment": "/manager/fitness/assessments",
    "managerBatchRecordAssessments": "/manager/fitness/assessments/batch",
    
    // Student profile endpoints
    "getStudentProfile": "/student/profile",
    
    // Student class endpoints
    "getStudentClass": "/student/class",
    "getStudentClassmates": "/student/class/classmates",
    
    // Student course endpoints
    "getStudentCourses": "/student/courses",
    "getStudentGrades": "/student/courses/grades",
    
    // Student fitness assessment endpoints
    "getStudentFitnessAssessments": "/student/fitness-assessments",
    
    // Student violation endpoints
    "getStudentMyViolations": "/student/violations",
    
    // Student equipment endpoints
    "getStudentMyEquipment": "/student/equipment",
    "updateStudentReceiptStatus": "/student/equipment/:receiptId",
    
    // Student allowance endpoints
    "getStudentMyAllowances": "/student/allowances",
    "updateStudentAllowanceStatus": "/student/allowances/:allowanceId",

    // Report endpoint (shared between Manager and Admin)
    "getReports": "/reports"
};

export default ENDPOINTS;
