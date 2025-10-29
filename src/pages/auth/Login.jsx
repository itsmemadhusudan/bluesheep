import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/auth.css";
import loginIllustration from "../../assets/images/hero.jpg"; // you can replace with any login illustration

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/student-dashboard"); // simulate login
  };

  return (
    <div className="auth-container">
      {/* LEFT SIDE */}
      <div className="auth-left">
        <Link to="/" className="back-link">
          ← Back To Home Screen
        </Link>
        <div className="auth-illustration">
          <img src={loginIllustration} alt="Illustration" />
          <h3>Welcome to BlueSheep University</h3>
          <p>
            Learn, grow, and achieve your academic goals with world-class
            programs and guidance.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">
        <div className="login-card">
          <h2>Member Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <i className="fa fa-envelope"></i>
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <div className="divider">
            <span>Or</span>
          </div>

          <button className="google-btn">
            <i className="fa-brands fa-google"></i> Continue with Google
          </button>

          <p className="signup-text">
            Not a member?{" "}
            <Link to="/register" className="signup-link">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
