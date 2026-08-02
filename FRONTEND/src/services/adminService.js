import axios from "axios";

const API_URL = "http://localhost:5000/api/admin";

// ==============================
// Get Dashboard Statistics
// ==============================
export const getDashboardStats = async (token) => {
  const response = await axios.get(`${API_URL}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// ==============================
// Get Analytics
// ==============================
export const getAnalytics = async (token) => {
  const response = await axios.get(`${API_URL}/analytics`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// ==============================
// Get All Citizens
// ==============================
export const getAllCitizens = async (token) => {
  const response = await axios.get(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// ==============================
// Delete Citizen
// ==============================
export const deleteCitizen = async (token, citizenId) => {
  const response = await axios.delete(
    `${API_URL}/users/${citizenId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
// ==============================
// Get Reports
// ==============================
export const getReports = async (token) => {
  const response = await axios.get(`${API_URL}/reports`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};