import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/complaints`;
export const getDepartmentDashboard = async (token) => {
  const response = await axios.get(
    `${API_URL}/department/dashboard`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};