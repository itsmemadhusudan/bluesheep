import React, { useState } from "react";
import "../../styles/CourseDetail.css";
import logo from "../../assets/logo.png";
import { useParams } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

const CourseDetail = () => {
  const { id } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("course");

  const [showLessonPopup, setShowLessonPopup] = useState(false);
  const [showMcqPopup, setShowMcqPopup] = useState(false);
  const [showCasePopup, setShowCasePopup] = useState(false);

  // Mock course data
  const course = {
    id,
    title: "Introduction to Programming",
    description: "Learn the fundamentals of Python programming.",
    duration: "6 Weeks",
    category: "Programming",
  };

  const [lesson, setLesson] = useState({
    name: "",
    description: "",
    file: null,
  });

  const [mcq, setMcq] = useState({
    question: "",
    options: ["", "", "", ""],
    correct: "",
  });

  const [caseStudy, setCaseStudy] = useState({
    title: "",
    file: null,
    questions: ["", "", ""],
  });

  const handleLessonChange = (e) => {
    const { name, value, files } = e.target;
    setLesson({ ...lesson, [name]: files ? files[0] : value });
  };

  const handleMcqChange = (e, index) => {
    const updated = [...mcq.options];
    updated[index] = e.target.value;
    setMcq({ ...mcq, options: updated });
  };

  const handleCaseChange = (e) => {
    const { name, value, files } = e.target;
    setCaseStudy({ ...caseStudy, [name]: files ? files[0] : value });
  };

  const handleCaseQuestionChange = (index, value) => {
    const updated = [...caseStudy.questions];
    updated[index] = value;
    setCaseStudy({ ...caseStudy, questions: updated });
  };

  const addCaseQuestion = () => {
    setCaseStudy({ ...caseStudy, questions: [...caseStudy.questions, ""] });
  };

  const submitLesson = (e) => {
    e.preventDefault();
    alert(
      `✅ Lesson Uploaded:\nName: ${lesson.name}\nDescription: ${lesson.description}\nFile: ${lesson.file?.name}`
    );
    setLesson({ name: "", description: "", file: null });
    setShowLessonPopup(false);
  };

  const submitMcq = (e) => {
    e.preventDefault();
    alert("✅ MCQ posted successfully!");
    setShowMcqPopup(false);
  };

  const submitCaseStudy = (e) => {
    e.preventDefault();
    alert(
      `✅ Case Study Uploaded:\nTitle: ${caseStudy.title}\nFile: ${caseStudy.file?.name}\nQuestions: ${caseStudy.questions.length}`
    );
    setCaseStudy({ title: "", file: null, questions: ["", "", ""] });
    setShowCasePopup(false);
  };

  return (
    <div className="teacher-dashboard-layout">
      {/* ===== NAVBAR ===== */}
      <nav className="teacher-navbar">
        <div className="nav-left">
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
            <div
              className="profile-circle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
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
                  <li>
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
        <TeacherSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* ===== MAIN CONTENT ===== */}
        <main className="teacher-content">
          <div className="course-detail">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>
              <strong>Duration:</strong> {course.duration} |{" "}
              <strong>Category:</strong> {course.category}
            </p>

            <div className="course-actions">
              <button
                className="primary-btn"
                onClick={() => setShowLessonPopup(true)}
              >
                Upload Lesson
              </button>
              <button
                className="secondary-btn"
                onClick={() => setShowMcqPopup(true)}
              >
                Post MCQ
              </button>
              <button
                className="secondary-btn"
                onClick={() => setShowCasePopup(true)}
              >
                Upload Case Study
              </button>
            </div>

            {/* ===== LESSON UPLOAD POPUP ===== */}
            {showLessonPopup && (
              <div className="popup-overlay">
                <div className="popup">
                  <h3>📘 Upload Lesson</h3>
                  <form onSubmit={submitLesson}>
                    <label>Lesson Name</label>
                    <input
                      type="text"
                      name="name"
                      value={lesson.name}
                      onChange={handleLessonChange}
                      placeholder="Enter lesson name"
                      required
                    />

                    <label>Description</label>
                    <textarea
                      name="description"
                      value={lesson.description}
                      onChange={handleLessonChange}
                      placeholder="Enter lesson description"
                      required
                    ></textarea>

                    <label>Upload File</label>
                    <input
                      type="file"
                      name="file"
                      accept=".pdf,.docx,.mp4,.avi"
                      onChange={handleLessonChange}
                      required
                    />

                    <div className="popup-buttons">
                      <button type="submit" className="submit-btn">
                        Upload
                      </button>
                      <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => setShowLessonPopup(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* ===== MCQ POPUP ===== */}
            {showMcqPopup && (
              <div className="popup-overlay">
                <div className="popup">
                  <h3>🧩 Post MCQ Question</h3>
                  <form onSubmit={submitMcq}>
                    <label>Question</label>
                    <input
                      type="text"
                      placeholder="Enter question"
                      value={mcq.question}
                      onChange={(e) =>
                        setMcq({ ...mcq, question: e.target.value })
                      }
                      required
                    />

                    {mcq.options.map((opt, i) => (
                      <input
                        key={i}
                        type="text"
                        placeholder={`Option ${i + 1}`}
                        value={opt}
                        onChange={(e) => handleMcqChange(e, i)}
                        required
                      />
                    ))}

                    <label>Correct Answer</label>
                    <input
                      type="text"
                      placeholder="Enter correct answer"
                      value={mcq.correct}
                      onChange={(e) =>
                        setMcq({ ...mcq, correct: e.target.value })
                      }
                      required
                    />

                    <div className="popup-buttons">
                      <button type="submit" className="submit-btn">
                        Post Question
                      </button>
                      <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => setShowMcqPopup(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* ===== CASE STUDY POPUP ===== */}
            {showCasePopup && (
              <div className="popup-overlay">
                <div className="popup">
                  <h3>📄 Upload Case Study</h3>
                  <form onSubmit={submitCaseStudy}>
                    <label>Case Study Title</label>
                    <input
                      type="text"
                      name="title"
                      value={caseStudy.title}
                      onChange={handleCaseChange}
                      placeholder="Enter case study title"
                      required
                    />

                    <label>Upload File</label>
                    <input
                      type="file"
                      name="file"
                      accept=".pdf,.docx"
                      onChange={handleCaseChange}
                      required
                    />

                    <label>Case Study Questions</label>
                    {caseStudy.questions.map((q, i) => (
                      <input
                        key={i}
                        type="text"
                        placeholder={`Question ${i + 1}`}
                        value={q}
                        onChange={(e) =>
                          handleCaseQuestionChange(i, e.target.value)
                        }
                        required
                      />
                    ))}

                    <button
                      type="button"
                      className="add-question-btn"
                      onClick={addCaseQuestion}
                    >
                      ➕ Add Another Question
                    </button>

                    <div className="popup-buttons">
                      <button type="submit" className="submit-btn">
                        Upload Case Study
                      </button>
                      <button
                        type="button"
                        className="cancel-btn"
                        onClick={() => setShowCasePopup(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CourseDetail;
