# Military Management System API Test Framework

This document summarizes the available API test tools for the Military Management System backend.

## API Wrappers

API wrappers are organized in `lib/api_list/` directory with the following modules:

| File | Description |
|------|-------------|
| `auth.js` | Authentication operations (login, logout, registration) |
| `term.js` | Term management operations |
| `course.js` | Course management operations |
| `class.js` | Class management for admins, managers, and students |
| `fitness.js` | Fitness test operations for admins, managers, and students |
| `violation.js` | Violation record operations for managers and students |
| `equipment.js` | Equipment management operations for admins and students |
| `allowance.js` | Allowance management operations for admins and students |
| `search.js` | Search operations for admins and managers |
| `profile.js` | Student profile access operations |
| `grade.js` | Grade management and viewing operations |
| `manager.js` | Manager-related operations for admins |
| `dashboard.js` | Dashboard data operations for all user roles |
| `student_course.js` | Student course operations |

## Sample Test Flows

Sample test flows are provided in the `flows/` directory to demonstrate API usage:

### Authentication
- `flows/auth/login.js`: Tests login/logout for admin, manager, and student users

### Admin Operations
- `flows/admin/term_course.js`: Tests term and course CRUD operations
- `flows/admin/class_management.js`: Tests class creation and student management

### Manager Operations
- `flows/manager/violations.js`: Tests violation management and fitness assessment

### Student Operations
- `flows/student/my_data.js`: Tests accessing student data (profile, class, courses, etc.)

## Extending the Framework

To add additional API tests:

1. Add new endpoints to `lib/endpoint.js` if needed
2. Create an API wrapper module in `lib/api_list/`
3. Include your module in `lib/api.js`
4. Create test flows in the `flows/` directory
