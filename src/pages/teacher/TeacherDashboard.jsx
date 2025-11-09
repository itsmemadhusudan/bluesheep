import React, { useState } from "react";
import "../../styles/TeacherDashboard.css";
import TeacherSidebar from "./TeacherSidebar";
import NavbarAfterLogin from "./NavbarAfterLogin"; // ✅ Imported new fixed navbar

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="teacher-dashboard-layout">
      {/* ===== FIXED NAVBAR ===== */}
      <NavbarAfterLogin />

      {/* ===== BODY SECTION ===== */}
      <div className="teacher-body">
        {/* ===== FIXED SIDEBAR ===== */}
        <TeacherSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

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
