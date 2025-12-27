import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Dashboard</h2>

        <button onClick={() => navigate("/start")}>
          Start Interview
        </button>
      </div>
    </>
  );
}

export default Dashboard;
