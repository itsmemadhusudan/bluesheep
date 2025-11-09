import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "../../styles/TeacherDashboard.css";

const NavbarAfterLogin = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle profile dropdown
  const handleProfileClick = () => setMenuOpen(!menuOpen);

  // Close menu when clicking outside
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
    <nav className="teacher-navbar fixed-navbar">
      {/* ===== LEFT SECTION ===== */}
      <div className="nav-left" onClick={() => navigate("/")}>
        <img src={logo} alt="BlueSheep" className="nav-logo" />
        <h2>BlueSheep University</h2>
      </div>

      {/* ===== RIGHT SECTION ===== */}
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
  );
};

export default NavbarAfterLogin;
