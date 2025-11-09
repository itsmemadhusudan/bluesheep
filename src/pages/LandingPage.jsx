import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/landing.css";

// Carousel images
import ads1 from "../assets/images/ads1.jpg";
import ads2 from "../assets/images/ads2.jpg";
import ads3 from "../assets/images/ads3.png";

const LandingPage = () => {
  const images = [ads1, ads2, ads3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Navbar />

      {/* ===== IMAGE CAROUSEL ===== */}
      <section className="carousel-section">
        <div className="carousel-container">
          {images.map((img, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <img src={img} alt={`Advertisement ${index + 1}`} />
            </div>
          ))}
          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COURSES SECTION ===== */}
      <section className="courses-section">
        <h2>Industry-Relevant Free Courses</h2>
        <p>
          Explore our free online courses, designed by industry experts to boost
          your skills and advance your career growth.
        </p>

        <div className="courses-container">
          {/* Sidebar */}
          <div className="courses-sidebar">
            <button className="active-category">
              <i className="fa-solid fa-chart-line"></i> Popular Courses
            </button>
            <ul>
              <li>
                <i className="fa-solid fa-building-columns"></i> University
                Programs
              </li>
              <li>
                <i className="fa-brands fa-microsoft"></i> Microsoft Programs
              </li>
              <li>
                <i className="fa-solid fa-briefcase"></i> Management
              </li>
              <li>
                <i className="fa-solid fa-robot"></i> ChatGPT & Generative AI
              </li>
              <li>
                <i className="fa-solid fa-brain"></i> Artificial Intelligence
              </li>
              <li>
                <i className="fa-solid fa-gears"></i> Machine Learning
              </li>
              <li>
                <i className="fa-solid fa-shield-halved"></i> Cyber Security
              </li>
            </ul>
          </div>

          {/* Main Courses Grid */}
          <div className="courses-main">
            <div className="subscription-banner">
              <div>
                <i className="fa-solid fa-crown"></i> Get unlimited certificates
                with an Academy Pro+ subscription
              </div>
              <div className="subscription-right">
                <p>$15/month</p>
                <button className="trial-btn">Start 7-Day Free Trial</button>
              </div>
            </div>

            <h3 className="section-subtitle">Popular Free Courses</h3>

            <div className="course-cards">
              {/* Card 1 */}
              <div className="course-card">
                <div className="course-img">
                  <span className="badge">FREE</span>
                  <img
                    src="https://www.simplilearn.com/ice9/course_images/leadership-and-management.webp"
                    alt="Leadership"
                  />
                </div>
                <div className="course-info">
                  <p className="rating">⭐ 4.61 · 59.3K+ learners</p>
                  <h4>Leadership and Management</h4>
                  <p className="duration">1.5 hrs</p>
                  <button className="view-btn">View Course</button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="course-card">
                <div className="course-img">
                  <span className="badge">FREE</span>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1358/1*rrTt6Dd3hLKtCjO6GexUdw.jpeg"
                    alt="Prompt Engineering"
                  />
                </div>
                <div className="course-info">
                  <p className="rating">⭐ 4.57 · 152.8K+ learners</p>
                  <h4>Prompt Engineering for ChatGPT</h4>
                  <p className="duration">2 hrs</p>
                  <button className="view-btn">View Course</button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="course-card">
                <div className="course-img">
                  <span className="badge">FREE</span>
                  <img
                    src="https://www.analytixlabs.co.in/blog/wp-content/uploads/2023/05/procurement-management.jpg"
                    alt="Procurement Management"
                  />
                </div>
                <div className="course-info">
                  <p className="rating">⭐ 4.7 · 29.7K+ learners</p>
                  <h4>Procurement Management</h4>
                  <p className="duration">1 hr</p>
                  <button className="view-btn">View Course</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRO COURSES SECTION ===== */}
      <section className="pro-courses-section">
        <h2>
          Become a Skilled Professional with <span>Pro Courses</span>
        </h2>
        <p>
          Gain industry-ready skills with certificate courses, hands-on projects,
          expert guidance, and AI tools to boost productivity.
        </p>

        <div className="pro-courses-nav">
          <button className="active">Popular</button>
          <button>Microsoft Courses</button>
          <button>IT & Software</button>
          <button>Data Science & ML</button>
          <button>AI & Generative AI</button>
          <button>Management</button>
          <button>Cyber Security</button>
          <button>Cloud Computing</button>
        </div>

        <div className="pro-course-grid">
          <div className="pro-card">
            <span className="pro-badge">PRO</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732220.png"
              alt="Excel"
            />
            <h4>Master Data Analytics in Excel</h4>
            <p>2 projects · 5.5 hrs video content</p>
            <button>View Course</button>
          </div>

          <div className="pro-card">
            <span className="pro-badge">PRO</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
              alt="Python"
            />
            <h4>Master Python Programming</h4>
            <p>3 projects · 11.5 hrs video content</p>
            <button>View Course</button>
          </div>

          <div className="pro-card">
            <span className="pro-badge">PRO</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/10302/10302073.png"
              alt="ChatGPT"
            />
            <h4>ChatGPT for Working Professionals</h4>
            <p>2 projects · 12 hrs video content</p>
            <button>View Course</button>
          </div>

          <div className="pro-card">
            <span className="pro-badge">PRO</span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732220.png"
              alt="Excel Advanced"
            />
            <h4>Excel Training: Beginners to Advanced</h4>
            <p>2 projects · 10 hrs video content</p>
            <button>View Course</button>
          </div>
        </div>
      </section>

      {/* ===== LEARNING PATH SECTION ===== */}
      <section className="learning-path-section">
        <h2>Pick a Learning Path that Suits your Career Goals</h2>
        <div className="learning-path-grid">
          <div className="path-card">
            <h3><i className="fa-solid fa-crown"></i> Pro Courses</h3>
            <p>
              Gain in-demand skills with AI-powered learning and hands-on projects
            </p>
            <hr />
            <ul>
              <li>✔ Pro Certificate from Great Learning</li>
              <li>✔ Self-paced online learning (15–20 hours)</li>
            </ul>
            <button>Explore Courses</button>
          </div>

          <div className="path-card">
            <h3><i className="fa-solid fa-graduation-cap"></i> University Programs</h3>
            <p>Get certified by top Universities in industry-relevant skills</p>
            <hr />
            <ul>
              <li>
                ✔ Certificate from top universities like MIT, UT Austin, Johns
                Hopkins
              </li>
              <li>✔ Immersive cohort-based online learning (6–12 months)</li>
            </ul>
            <button>Explore Programs</button>
          </div>

          <div className="path-card">
            <h3><i className="fa-solid fa-globe"></i> Free Courses</h3>
            <p>Learn basic concepts for free with 1,000+ introductory courses</p>
            <hr />
            <ul>
              <li>✔ Certificate from Great Learning (Paid)</li>
              <li>✔ Self-paced online learning (1–3 hours)</li>
            </ul>
            <button>Explore Free Courses</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LandingPage;
