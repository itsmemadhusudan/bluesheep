import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/TeacherDashboard.css";

const TeacherSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Helper for active route
  const isActive = (path) => location.pathname === path;

  return (
    <aside className="teacher-sidebar">
      {/* ===== DASHBOARD ===== */}
      <button
        className={isActive("/teacher-dashboard") ? "active" : ""}
        onClick={() => navigate("/teacher-dashboard")}
      >
        <i className="fa-solid fa-house"></i> Dashboard
      </button>

      {/* ===== COURSES ===== */}
      <div className="dropdown">
        <button
          className={activeDropdown === "course" ? "active" : ""}
          onClick={() => toggleDropdown("course")}
        >
          <i className="fa-solid fa-book"></i> Courses
        </button>

        {activeDropdown === "course" && (
          <div className="dropdown-menu">
            <ul>
              <li
                className={isActive("/create-course") ? "active" : ""}
                onClick={() => navigate("/create-course")}
              >
                Create Course
              </li>
              <li
                className={isActive("/view-courses") ? "active" : ""}
                onClick={() => navigate("/view-courses")}
              >
                View Courses
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* ===== MCQ MANAGEMENT ===== */}
      <div className="dropdown">
        <button
          className={activeDropdown === "mcq" ? "active" : ""}
          onClick={() => toggleDropdown("mcq")}
        >
          <i className="fa-solid fa-list-check"></i> MCQ Management
        </button>

        {activeDropdown === "mcq" && (
          <div className="dropdown-menu">
            <ul>
              <li
                className={isActive("/create-mcq") ? "active" : ""}
                onClick={() => navigate("/create-mcq")}
              >
                Create MCQ
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* ===== REPORTS ===== */}
      <button
        className={isActive("/reports") ? "active" : ""}
        onClick={() => navigate("/reports")}
      >
        <i className="fa-solid fa-chart-line"></i> Reports
      </button>
    </aside>
  );
};

export default TeacherSidebar;
