import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/student-dashboard"); // simulate registration
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <h1>Join BlueSheep University</h1>
        <p>Sign up and start your journey to excellence today.</p>
      </div>

      <div className="auth-right">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="primary-btn">Create Account</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
