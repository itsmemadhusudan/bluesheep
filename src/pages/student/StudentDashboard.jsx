import React from "react";
import Navbar from "../../components/Navbar"; 
import "../../styles/dashboard.css"; 

const StudentDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Navbar imported separately */}
      <Navbar />

      {/* ===== DASHBOARD MAIN CONTENT ===== */}
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
