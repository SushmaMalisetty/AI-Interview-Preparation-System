const API_URL = "http://localhost:5000";

// Register user API
export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/api/users/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  return response.json();
};
