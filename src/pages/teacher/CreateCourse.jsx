import React, { useState, useEffect } from "react";
import "../../styles/CreateCourse.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar"; // ✅ imported sidebar

const CreateCourse = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("course"); // sidebar state

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    duration: "",
    files: [],
  });

  // ===== Profile Dropdown =====
  const handleProfileClick = () => setMenuOpen(!menuOpen);

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

  // ===== Form Handling =====
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter((file) =>
      [
        "application/pdf",
        "video/mp4",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type)
    );

    if (validFiles.length !== selectedFiles.length) {
      alert("❌ Only PDF, MP4, and DOCX files are allowed!");
    }

    setFormData({ ...formData, files: validFiles });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Created:", formData);
    alert("✅ Course created successfully!");
    setFormData({
      title: "",
      description: "",
      category: "",
      duration: "",
      files: [],
    });
  };

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

      {/* ===== BODY SECTION ===== */}
      <div className="teacher-body">
        {/* ✅ Imported Sidebar */}
        <TeacherSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* ===== MAIN CONTENT ===== */}
        <main className="teacher-content">
          <div className="create-course-form">
            <h2>📘 Create a New Course</h2>
            <p>Fill out the form below to add a new course.</p>

            <form onSubmit={handleSubmit}>
              <label>Course Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter course title"
                required
              />

              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter course description"
                required
              ></textarea>

              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Programming">Programming</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
              </select>

              <label>Duration (Credit)</label>
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Enter course duration"
                required
              />

              <label>Upload Course Materials (PDF, DOCX, MP4)</label>
              <input
                type="file"
                multiple
                accept=".pdf, .docx, video/mp4"
                onChange={handleFileChange}
              />

              {formData.files.length > 0 && (
                <div className="file-list">
                  <p>Selected Files:</p>
                  <ul>
                    {formData.files.map((file, index) => (
                      <li key={index}>
                        <i className="fa-regular fa-file"></i> {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <button type="submit" className="submit-btn">
                Create Course
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateCourse;
