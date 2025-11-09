import React, { useState } from "react";
import "../../styles/ViewCourses.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar"; // ✅ imported sidebar

const ViewCourses = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("course");

  // Sample mock data (replace with backend API later)
  const [courses] = useState([
    {
      id: 1,
      title: "Introduction to Programming",
      category: "Programming",
      duration: "6 Weeks",
      description: "Learn the basics of programming using Python.",
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      category: "Design",
      duration: "4 Weeks",
      description: "Master design principles and build modern interfaces.",
    },
    {
      id: 3,
      title: "Digital Marketing 101",
      category: "Marketing",
      duration: "5 Weeks",
      description: "Understand marketing strategies and social media tools.",
    },
  ]);

  return (
    <div className="teacher-dashboard-layout">
      {/* ===== NAVBAR ===== */}
      <nav className="teacher-navbar">
        <div className="nav-left" onClick={() => navigate("/")}>
          <img src={logo} alt="BlueSheep" className="nav-logo" />
          <h2>BlueSheep University</h2>
        </div>

        <div className="nav-right">
          <span className="welcome-text">Welcome, Teacher 🍎</span>

          <div className="notification-icon">
            <i className="fa-regular fa-bell"></i>
            <span className="notif-dot"></span>
          </div>

          <div className="profile-container">
            <div className="profile-circle">
              <i className="fa-regular fa-user"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* ===== BODY SECTION ===== */}
      <div className="teacher-body">
        {/* ✅ Imported Sidebar */}
        <TeacherSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* ===== MAIN CONTENT ===== */}
        <main className="teacher-content">
          <div className="view-courses">
            <h2>📚 All Courses</h2>
            <p>Click any course to view its details.</p>

            <div className="course-grid">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="course-card clickable"
                  onClick={() => navigate(`/course-detail/${course.id}`)}
                >
                  <h3>{course.title}</h3>
                  <p className="course-category">
                    <i className="fa-solid fa-tag"></i> {course.category}
                  </p>
                  <p className="course-desc">{course.description}</p>
                  <p className="course-duration">
                    <i className="fa-regular fa-clock"></i> {course.duration}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewCourses;
