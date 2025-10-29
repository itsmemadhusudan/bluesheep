import React from "react";
import "../../styles/admin.css";

const AdminDashboard = () => (
  <div className="admin-dashboard">
    <h1>🛠️ Admin Dashboard</h1>
    <div className="admin-grid">
      <div className="tile">👩‍🎓 Manage Students</div>
      <div className="tile">👨‍🏫 Manage Teachers</div>
      <div className="tile">📈 Analytics</div>
    </div>
  </div>
);

export default AdminDashboard;
