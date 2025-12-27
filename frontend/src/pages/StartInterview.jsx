import { useNavigate } from "react-router-dom";

function StartInterview() {
  const navigate = useNavigate();

  const startInterview = () => {
    navigate("/interview");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Start Interview</h2>

      <p>Select your interview type:</p>

      <select>
        <option>Java Developer</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Full Stack Developer</option>
      </select>

      <br /><br />

      <button onClick={startInterview}>Start Interview</button>
    </div>
  );
}

export default StartInterview;
