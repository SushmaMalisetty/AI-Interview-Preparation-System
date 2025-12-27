import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Interview() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const questions = [
    "What is Java?",
    "Explain OOPS concepts",
    "What is React?"
  ];

  const nextQuestion = () => {
    setAnswer("");
    setQuestionIndex(questionIndex + 1);
  };

  if (questionIndex >= questions.length) {
  navigate("/result");
  return null;
}


  return (
    <div style={{ padding: "20px" }}>
      <h3>Question {questionIndex + 1}</h3>

      <p>{questions[questionIndex]}</p>

      <textarea
        rows="5"
        cols="50"
        placeholder="Type your answer here..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <br /><br />

      <button onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default Interview;
