import React, { useState } from "react";
import NavbarAfterLogin from "../teacher/NavbarAfterLogin"; // assuming your navbar after login file name
import TeacherSidebar from "../teacher/TeacherSidebar";
import "../../styles/CreateMCQ.css";

const CreateMCQ = () => {
  const [questions, setQuestions] = useState(
    Array.from({ length: 10 }, () => ({
      question: "",
      options: ["", "", "", ""],
      correct: "",
    }))
  );

  // Add a new question block
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correct: "" },
    ]);
  };

  // Update question text
  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  // Update options
  const handleOptionChange = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  // Update correct answer
  const handleCorrectChange = (index, value) => {
    const updated = [...questions];
    updated[index].correct = value;
    setQuestions(updated);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("MCQs Submitted:", questions);
    alert("✅ MCQs Created Successfully!");
  };

  return (
    <div className="teacher-dashboard-layout">
      <NavbarAfterLogin />
      <div className="teacher-body">
        <TeacherSidebar />
        <main className="teacher-content">
          <div className="create-mcq-container">
            <h2>🧩 Create MCQ Section</h2>
            <p className="notice">
              <strong>Notice:</strong> This MCQ section includes questions from
              all chapters. You must add at least 10 questions.
            </p>

            <form onSubmit={handleSubmit}>
              {questions.map((q, qIndex) => (
                <div key={qIndex} className="mcq-card">
                  <h4>Question {qIndex + 1}</h4>
                  <input
                    type="text"
                    placeholder="Enter question"
                    value={q.question}
                    onChange={(e) =>
                      handleQuestionChange(qIndex, e.target.value)
                    }
                    required
                  />

                  <div className="options-grid">
                    {q.options.map((opt, oIndex) => (
                      <input
                        key={oIndex}
                        type="text"
                        placeholder={`Option ${oIndex + 1}`}
                        value={opt}
                        onChange={(e) =>
                          handleOptionChange(qIndex, oIndex, e.target.value)
                        }
                        required
                      />
                    ))}
                  </div>

                  <input
                    type="text"
                    placeholder="Enter correct answer"
                    className="correct-input"
                    value={q.correct}
                    onChange={(e) =>
                      handleCorrectChange(qIndex, e.target.value)
                    }
                    required
                  />
                </div>
              ))}

              <div className="add-question-btn">
                <button
                  type="button"
                  className="add-btn"
                  onClick={addQuestion}
                  title="Add another question"
                >
                  ➕ Add More Question
                </button>
              </div>

              <button type="submit" className="submit-btn">
                Submit All MCQs
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreateMCQ;
