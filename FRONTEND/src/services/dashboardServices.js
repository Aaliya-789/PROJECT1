import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/admin`;
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