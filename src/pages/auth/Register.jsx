import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/auth.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    contact: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Live password validation
    if (name === "password" || name === "confirmPassword") {
      if (
        formData.confirmPassword &&
        (name === "confirmPassword"
          ? value !== formData.password
          : formData.confirmPassword !== value)
      ) {
        setPasswordError("Passwords do not match ❌");
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match ❌");
      return;
    }

    alert("Registration successful!");
    navigate("/student-dashboard");
  };

  return (
    <div className="auth-wrapper">
      {/* ===== LEFT SECTION ===== */}
      <div className="auth-left smaller">
        <h1>
          Join <span>BlueSheep University</span>
        </h1>
        <p>Sign up and start your journey to excellence today.</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9044/9044123.png"
          alt="Register Illustration"
          className="auth-illustration"
        />
      </div>

      {/* ===== RIGHT SECTION ===== */}
      <div className="auth-right wider">
        <div className="auth-box left-align">
          <h2>Create Your Account</h2>
          <p className="subtitle">Please fill in the details to get started.</p>

          <form onSubmit={handleSubmit}>
            {/* First + Middle Name Row */}
            <div className="name-row">
              <div className="form-group">
                {/* <label>First Name *</label> */}
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                {/* <label>Middle Name (Optional)</label> */}
                <input
                  type="text"
                  name="middleName"
                  placeholder="Enter Middle Name"
                  value={formData.middleName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Last Name */}
            <div className="form-group">
              {/* <label>Last Name *</label> */}
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            {/* Contact */}
            <div className="form-group">
              {/* <label>Contact Number *</label> */}
              <input
                type="text"
                name="contact"
                placeholder="Enter Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>

            {/* Address */}
            <div className="form-group">
              {/* <label>Address *</label> */}
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              {/* <label>Email Address *</label> */}
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Password */}
            <div className="form-group">
              {/* <label>Password *</label> */}
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              {/* <label>Confirm Password *</label> */}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            {passwordError && <p className="error-message">{passwordError}</p>}

            <button type="submit" className="primary-btn">
              Create Account
            </button>
          </form>

          <p className="redirect-text">
            Already have an account?{" "}
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
