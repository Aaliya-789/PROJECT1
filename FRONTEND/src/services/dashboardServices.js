import axios from "axios";

const API_URL = "http://localhost:5000/api/admin";

// Get Dashboard Statistics
export const getDashboardStats = async (token) => {
  const response = await axios.get(
    `${API_URL}/dashboard`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};