import React, { useState } from "react";
import Navbar from "../../components/Navbar"; // ✅ Import your global navbar
import "../../styles/admin.css";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const sections = [
    { id: "dashboard", name: "Dashboard", icon: "📊" },
    { id: "user", name: "User Management", icon: "👩‍🎓" },
    { id: "teacher", name: "Teacher Management", icon: "👨‍🏫" },
    { id: "course", name: "Course Management", icon: "📚" },
    { id: "quiz", name: "Quiz Management", icon: "🧩" },
    { id: "case", name: "Case Studies", icon: "🧠" },
    { id: "analytics", name: "Analytics & Reports", icon: "📈" },
    { id: "settings", name: "Settings", icon: "⚙️" },
  ];

  return (
    <div className={`admin-layout ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* ===== IMPORTED NAVBAR ===== */}
      <Navbar />

      {/* ===== SIDEBAR + MAIN CONTENT ===== */}
      <div className="admin-container">
        {/* SIDEBAR */}
        <aside className={`admin-sidebar ${sidebarOpen ? "show" : "hide"}`}>
          <div className="sidebar-header">
            <button
              className="menu-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>
            <h3>Admin Menu</h3>
          </div>

          <ul className="sidebar-menu">
            {sections.map((sec) => (
              <li
                key={sec.id}
                className={`menu-item ${
                  activeSection === sec.id ? "active" : ""
                }`}
                onClick={() => setActiveSection(sec.id)}
              >
                <span className="icon">{sec.icon}</span> {sec.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="admin-main">
          <h1 className="page-title">
            {sections.find((s) => s.id === activeSection)?.name}
          </h1>

          {activeSection === "dashboard" && (
            <div className="dashboard-overview">
              <div className="stat-card">👩‍🎓 Total Students: 1280</div>
              <div className="stat-card">👨‍🏫 Total Teachers: 65</div>
              <div className="stat-card">📚 Active Courses: 42</div>
              <div className="stat-card">🧩 Quizzes Available: 120</div>
            </div>
          )}

          {activeSection !== "dashboard" && (
            <div className="placeholder">
              <p>
                You are viewing{" "}
                <strong>
                  {sections.find((s) => s.id === activeSection)?.name}
                </strong>{" "}
                section.
              </p>
              <p>Feature development in progress...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
