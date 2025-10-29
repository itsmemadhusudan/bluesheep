import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

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
          <select className="nav-dropdown">
            <option>Browse</option>
            <option>Courses</option>
            <option>Programs</option>
            <option>Resources</option>
          </select>

          <div className="nav-search">
            <input type="text" placeholder="Search Courses..." />
            <i className="fa fa-search"></i>
          </div>
        </div>

        {/* ===== RIGHT SECTION ===== */}
        <div className="nav-right">
          <span className="welcome-text">Welcome, Student 🎓</span>

          <span className="notification-dot"></span>

          <div className="profile-circle" title="My Profile"></div>

          <button className="login-btn" onClick={() => navigate("/login")}>
            Login / Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
