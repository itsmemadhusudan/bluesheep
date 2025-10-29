import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/landing.css";
import hero from "../assets/images/hero.jpg";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Welcome to <span>BlueSheep University</span> 🎓
            </h1>
            <p>
              Gain future-ready skills and learn from top global educators.
              BlueSheep helps students, teachers, and administrators collaborate
              seamlessly through one platform.
            </p>
            <button className="primary-btn">Explore Programs</button>
          </div>

          <div className="hero-image">
            <img src={hero} alt="Learning" />
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="features">
        <h2>Why Choose BlueSheep?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <i className="fa-solid fa-chalkboard-user"></i>
            <h3>Expert Teachers</h3>
            <p>Learn from global educators and experienced professionals.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-graduation-cap"></i>
            <h3>Flexible Courses</h3>
            <p>Study at your own pace with structured self-paced lessons.</p>
          </div>
          <div className="feature-card">
            <i className="fa-solid fa-briefcase"></i>
            <h3>Career Focused</h3>
            <p>
              Boost your career with modern, practical, and job-oriented
              programs.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <h2>Start Your Learning Journey Today 🚀</h2>
        <p>
          Join thousands of learners worldwide and gain access to quality
          education powered by technology.
        </p>
        <button className="primary-btn">Join Now</button>
      </section>

      <Footer />
    </>
  );
};

export default LandingPage;
