import axios from "axios";

const API_URL = "http://localhost:5000/api/notifications";

// ==============================
// Get Notifications
// ==============================
export const getNotifications = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// ==============================
// Mark Notification as Read
// ==============================
export const markNotificationAsRead = async (
  token,
  notificationId
) => {
  const response = await axios.put(
    `${API_URL}/${notificationId}/read`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};