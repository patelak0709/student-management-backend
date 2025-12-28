# Student Management System (Backend)

## Project Overview
This project is a role-based backend application developed using Node.js, Express.js, and MongoDB.
It demonstrates authentication, authorization, and ownership-based access control using JWT.

Frontend is not included as per project requirements. All APIs are tested using Postman.

---

## Objective
- Implement secure user authentication using JWT
- Apply role-based access control (Admin & Student)
- Ensure ownership-based data access
- Build realistic backend APIs

---

## Technology Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt / bcryptjs
- Postman

---

## User Roles

### Admin
- Can sign up and log in
- Can create student accounts
- Can create courses

### Student
- Cannot sign up directly
- Can log in using admin-created credentials
- Can view courses
- Can enroll in courses
- Can view own enrolled courses only

---

## Project Structure
student-management-backend
├── server.js
├── models
├── routes
├── middleware
├── package.json
└── README.md


---

## Authentication & Authorization
- JWT-based authentication
- Role-based authorization using middleware
- Ownership checks for student data

---

## API Endpoints

### Auth APIs
- POST /auth/signup (Admin only)
- POST /auth/login

### Admin APIs
- POST /admin/create-student
- POST /admin/courses

### Student APIs
- GET /courses
- POST /student/enroll/:courseId
- GET /student/my-courses

---

## Testing
- All APIs tested using Postman
- JWT token required for protected routes
- Unauthorized access is restricted

---

## Conclusion
This project fulfills all backend requirements including authentication, role-based authorization, and secure data access.
