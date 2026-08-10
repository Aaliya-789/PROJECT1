import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/api/users`;
// ==========================================
// Get My Profile
// ==========================================

export const getMyProfile = async (token) => {
  const response = await axios.get(
    `${API_URL}/me`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// ==========================================
// Update My Profile
// ==========================================

export const updateMyProfile = async (
  token,
  userData
) => {
  const response = await axios.put(
    `${API_URL}/me`,
    userData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
// ==========================================
// Change Password
// ==========================================

export const changePassword = async (
  token,
  passwordData
) => {
  const response = await axios.put(
    `${API_URL}/change-password`,
    passwordData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};