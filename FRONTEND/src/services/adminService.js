import axios from "axios";

const API_URL = "http://localhost:5000/api/admin";

// ==============================
// Get All Citizens
// (Uses /users endpoint)
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