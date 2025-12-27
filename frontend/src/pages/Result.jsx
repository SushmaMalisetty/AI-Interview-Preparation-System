import { useNavigate } from "react-router-dom";

function Result() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Interview Result</h2>

      <p><strong>Score:</strong> 7 / 10</p>

      <p><strong>Feedback:</strong></p>
      <p>
        Good understanding of basics. Improve explanation clarity
        and provide more examples.
      </p>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default Result;
