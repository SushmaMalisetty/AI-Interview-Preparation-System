import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div style={{
      padding: "10px 20px",
      background: "#222",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <h3>AI Interview Prep</h3>

      <button onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;
