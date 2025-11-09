import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import StudentDashboard from "./pages/student/StudentDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCourse from "./pages/teacher/CreateCourse";
import ViewCourses from "./pages/teacher/ViewCourses";
import CourseDetail from "./pages/teacher/CourseDetail"; 
import CreateMCQ from "./pages/teacher/CreateMCQ";
import Reports from "./pages/teacher/Reports";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/view-courses" element={<ViewCourses />} />
        <Route path="/course-detail/:id" element={<CourseDetail />} />
        <Route path="/create-mcq" element={<CreateMCQ />} />
      </Routes>
    </Router>
  );
};

export default App;
