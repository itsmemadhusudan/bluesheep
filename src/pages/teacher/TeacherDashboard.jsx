import React, { useState, useEffect } from "react";
import "../../styles/TeacherDashboard.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  // Handle profile dropdown toggle
  const handleProfileClick = () => setMenuOpen(!menuOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".profile-container")) setMenuOpen(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("teacher");
    navigate("/");
  };

  return (
    <div className="teacher-dashboard-layout">
      {/* ===== NAVBAR ===== */}
      <nav className="teacher-navbar">
        <div className="nav-left">
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
            <div className="profile-circle" onClick={handleProfileClick}>
              <i className="fa-regular fa-user"></i>
            </div>

            {menuOpen && (
              <div className="profile-menu">
                <ul>
                  <li>
                    <i className="fa-regular fa-user"></i> My Profile
                  </li>
                  <li>
                    <i className="fa-solid fa-lock"></i> Change Password
                  </li>
                  <li onClick={handleLogout}>
                    <i className="fa-solid fa-right-from-bracket"></i> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* ===== LAYOUT ===== */}
      <div className="teacher-body">
        {/* ===== SIDEBAR ===== */}
        <aside className="teacher-sidebar">
          <button
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            <i className="fa-solid fa-house"></i> Dashboard
          </button>

          <div className="dropdown">
            <button
              className={activeTab === "course" ? "active" : ""}
              onClick={() => setActiveTab("course")}
            >
              <i className="fa-solid fa-book"></i> Courses
            </button>
            {activeTab === "course" && (
              <div className="dropdown-menu">
                <ul>
                  <li>Create Course</li>
                  <li>View Courses</li>
                  <li>Update Course</li>
                  <li>Delete Course</li>
                </ul>
              </div>
            )}
          </div>

          <button
            className={activeTab === "mcq" ? "active" : ""}
            onClick={() => setActiveTab("mcq")}
          >
            <i className="fa-solid fa-list-check"></i> MCQ Management
          </button>

          <button
            className={activeTab === "case" ? "active" : ""}
            onClick={() => setActiveTab("case")}
          >
            <i className="fa-solid fa-briefcase"></i> Case Studies
          </button>

          <button
            className={activeTab === "reports" ? "active" : ""}
            onClick={() => setActiveTab("reports")}
          >
            <i className="fa-solid fa-chart-line"></i> Reports
          </button>
        </aside>

        {/* ===== MAIN CONTENT ===== */}
        <main className="teacher-content">
          {activeTab === "dashboard" && (
            <>
              <h3>Quick Actions</h3>
              <div className="teacher-grid">
                <div className="tile">
                  <i className="fa-solid fa-book-open"></i>
                  <h4>Manage Courses</h4>
                  <p>Create, update, or manage your course content.</p>
                </div>

                <div className="tile">
                  <i className="fa-solid fa-list-check"></i>
                  <h4>MCQ Posting</h4>
                  <p>Upload and manage multiple-choice questions for students.</p>
                </div>

                <div className="tile">
                  <i className="fa-solid fa-briefcase"></i>
                  <h4>Case Studies</h4>
                  <p>Upload and track case studies for classroom learning.</p>
                </div>

                <div className="tile">
                  <i className="fa-solid fa-chart-line"></i>
                  <h4>Reports</h4>
                  <p>View student reports and analyze progress metrics.</p>
                </div>
              </div>
            </>
          )}

          {activeTab === "course" && (
            <div className="content-section">
              <h3>📘 Course Management</h3>
              <p>Perform Create, Read, Update, and Delete operations for courses.</p>
            </div>
          )}

          {activeTab === "mcq" && (
            <div className="content-section">
              <h3>📝 MCQ Management</h3>
              <p>Post, edit, and manage MCQ questions for student practice.</p>
            </div>
          )}

          {activeTab === "case" && (
            <div className="content-section">
              <h3>📂 Case Study Upload</h3>
              <p>Upload or update case studies for teaching materials.</p>
            </div>
          )}

          {activeTab === "reports" && (
            <div className="content-section">
              <h3>📊 Reports</h3>
              <p>Analyze student performance and attendance reports here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;
