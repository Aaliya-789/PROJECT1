import axios from "axios";

const API_URL = "http://localhost:5000/api/complaints";

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