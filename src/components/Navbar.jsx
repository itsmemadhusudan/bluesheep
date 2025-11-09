import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated login state

  // 🔹 You can replace this with actual auth check (e.g., localStorage token)
  useEffect(() => {
    const token = localStorage.getItem("studentToken");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("studentToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">
        {/* ===== LEFT SECTION ===== */}
        <div className="nav-left" onClick={() => navigate("/")}>
          <img src={logo} alt="BlueSheep Logo" className="nav-logo" />
          <h2 className="nav-title">BlueSheep University</h2>
        </div>

        {/* ===== CENTER SECTION ===== */}
        <div className="nav-center">
          <div className="browse-dropdown">
            <button className="browse-btn">
              Browse <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className="browse-menu">
              <p>Computer Science</p>
              <p>Business & Management</p>
              <p>Engineering</p>
              <p>Design & Creativity</p>
              <p>Language & Communication</p>
            </div>
          </div>

          <div className="search-box">
            <i className="fa fa-search search-icon"></i>
            <input type="text" placeholder="Search Courses" />
          </div>
        </div>

        {/* ===== RIGHT SECTION ===== */}
        <div className="nav-right">
          {!isLoggedIn ? (
            <>
              <a href="#academy" className="nav-link">
                <i className="fa-solid fa-crown"></i> Academy Pro+
                <span className="new-tag">NEW</span>
              </a>
              <a href="#university" className="nav-link">
                <i className="fa-solid fa-graduation-cap"></i> University Programs
              </a>
              <button
                className="login-btn"
                onClick={() => navigate("/login")}
              >
                Login / Sign Up
              </button>
            </>
          ) : (
            <>
              {/* Notification Bell */}
              <div className="notification-icon">
                <i className="fa-regular fa-bell"></i>
                <span className="notif-dot"></span>
              </div>

              {/* Profile Icon */}
              <div
                className="profile-container"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <div className="profile-circle">
                  <i className="fa-solid fa-user"></i>
                </div>

                {isProfileMenuOpen && (
                  <div className="profile-dropdown">
                    <ul>
                      <li onClick={() => navigate("/profile")}>
                        <i className="fa-solid fa-id-badge"></i> My Profile
                      </li>
                      <li onClick={() => navigate("/change-password")}>
                        <i className="fa-solid fa-key"></i> Change Password
                      </li>
                      <li onClick={() => navigate("/certificate")}>
                        <i className="fa-solid fa-award"></i> Certificates
                      </li>
                      <li onClick={() => navigate("/test-result")}>
                        <i className="fa-solid fa-chart-line"></i> Test Results
                      </li>
                      <li onClick={handleLogout}>
                        <i className="fa-solid fa-right-from-bracket"></i> Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {/* ===== MOBILE MENU TOGGLE ===== */}
        <div
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <p>Computer Science</p>
          <p>Business & Management</p>
          <p>Engineering</p>
          <p>Design & Creativity</p>
          <p>Language & Communication</p>

          {!isLoggedIn ? (
            <button onClick={() => navigate("/login")}>Login / Sign Up</button>
          ) : (
            <>
              <button onClick={() => navigate("/profile")}>My Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
