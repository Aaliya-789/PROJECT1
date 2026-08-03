import { useEffect, useState } from "react";
import {
  getNotifications,
  markNotificationAsRead,
} from "../../services/notificationService";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const token = localStorage.getItem("token");

      const data = await getNotifications(token);

      setNotifications(data.notifications || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRead = async (notificationId) => {
    try {
      const token = localStorage.getItem("token");

      await markNotificationAsRead(
        token,
        notificationId
      );

      fetchNotifications();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">
          Notifications
        </h1>

        <p className="text-gray-600 mb-8">
          Stay updated about your complaints and civic services.
        </p>

        {notifications.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-md p-10 text-center">

            <div className="text-5xl mb-4">
              🔔
            </div>

            <h2 className="text-2xl font-bold text-[#0F172A]">
              No notifications yet
            </h2>

            <p className="text-gray-500 mt-3">
              You will receive updates when your complaint status changes.
            </p>

          </div>

        ) : (

          <div className="space-y-5">

            {notifications.map((notification) => (

              <div
                key={notification._id}
                onClick={() => {
                  if (!notification.isRead) {
                    handleRead(notification._id);
                  }
                }}
                className={`rounded-2xl shadow-md p-6 cursor-pointer transition
                ${
                  notification.isRead
                    ? "bg-white"
                    : "bg-blue-50 border border-blue-300"
                }`}
              >

                <div className="flex justify-between items-center">

                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    {notification.title}
                  </h3>

                  {!notification.isRead && (
                    <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      New
                    </span>
                  )}

                </div>

                <p className="text-gray-600 mt-3 whitespace-pre-line">
                  {notification.message}
                </p>

                {notification.complaint && (
                  <p className="text-sm text-gray-500 mt-3">
                    Complaint: {notification.complaint.title}
                  </p>
                )}

                <p className="text-sm text-gray-400 mt-3">
                  {new Date(
                    notification.createdAt
                  ).toLocaleString()}
                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Notifications;