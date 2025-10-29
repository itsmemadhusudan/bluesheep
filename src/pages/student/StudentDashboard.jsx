import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../../styles/dashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [browseOpen, setBrowseOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // redirect to landing page
  };

  const handleProfileClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleBrowseClick = () => {
    setBrowseOpen(!browseOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchTerm}`);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".profile-container") && !e.target.closest(".browse-container")) {
        setMenuOpen(false);
        setBrowseOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="dashboard-container">
      {/* ===== NAVBAR ===== */}
      <nav className="dashboard-navbar">
        <div className="nav-left">
          <img src={logo} alt="BlueSheep Logo" className="nav-logo" />
          <h2>BlueSheep University</h2>
        </div>

        <div className="nav-center">
          {/* ===== Browse Dropdown ===== */}
          <div className="browse-container">
            <button className="browse-btn" onClick={handleBrowseClick}>
              Browse <i className="fa-solid fa-chevron-down"></i>
            </button>
            {browseOpen && (
              <div className="browse-menu">
                <ul>
                  <li>Computer Science</li>
                  <li>Business & Management</li>
                  <li>Design & Creativity</li>
                  <li>Engineering</li>
                  <li>Language & Communication</li>
                </ul>
              </div>
            )}
          </div>

          {/* ===== Search Bar ===== */}
          <form className="search-bar" onSubmit={handleSearch}>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="text"
              placeholder="Search Courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>

        <div className="nav-right">
          <span className="welcome-text">Welcome, Student 🎓</span>

          <div className="notification-icon">
            <i className="fa-regular fa-bell"></i>
            <span className="notif-dot"></span>
          </div>

          {/* Profile Circle */}
          <div className="profile-container">
            <div className="profile-circle" onClick={handleProfileClick}>
              <i className="fa-regular fa-user"></i>
            </div>

            {menuOpen && (
              <div className="profile-menu">
                <ul>
                  <li onClick={() => navigate("/profile")}>
                    <i className="fa-regular fa-user"></i> My Profile
                  </li>
                  <li onClick={() => navigate("/change-password")}>
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

      {/* ===== DASHBOARD ===== */}
      <div className="dashboard">
        <h1>Student Dashboard</h1>
        <p className="dashboard-subtitle">
          Manage your courses, track progress, and explore resources.
        </p>

        <div className="dashboard-cards">
          <div className="card">
            <i className="fa-solid fa-book-open"></i>
            <h3>My Courses</h3>
            <p>Access your enrolled courses, lessons, and materials.</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-chart-line"></i>
            <h3>Test Scores</h3>
            <p>Track your performance and analyze your progress.</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-question-circle"></i>
            <h3>MCQ Practice</h3>
            <p>Enhance your learning with practice quizzes and tests.</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-briefcase"></i>
            <h3>Case Studies</h3>
            <p>Work on practical case studies to apply your knowledge.</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-tasks"></i>
            <h3>Assignments</h3>
            <p>View, submit, and manage all your assignments here.</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-bell"></i>
            <h3>Notifications</h3>
            <p>Stay updated with class announcements and deadlines.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
