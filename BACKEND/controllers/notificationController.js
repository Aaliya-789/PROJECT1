const Notification = require("../models/Notification");

// Get Logged-in User Notifications
const getNotifications = async (req, res) => {
  try {
    console.log("Logged in user:", req.user._id);

    const all = await Notification.find();
    console.log("ALL NOTIFICATIONS:", all);

    const notifications = await Notification.find({
      user: req.user._id,
    });

    res.json({
      success: true,
      count: notifications.length,
      notifications,
    });
  } catch (error) {
    console.log(error);
  }
};

// Mark Notification as Read
const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!notification) {
      return res.status(404).json({
        success: false,
        message: "Notification not found",
      });
    }

    notification.isRead = true;
    await notification.save();

    res.status(200).json({
      success: true,
      message: "Notification marked as read",
      notification,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getNotifications,
  markAsRead,
};