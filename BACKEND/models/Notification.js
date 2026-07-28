const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    // User who will receive the notification
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Related complaint (optional)
    complaint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Complaint",
      default: null,
    },

    // Notification title
    title: {
      type: String,
      required: [true, "Notification title is required"],
      trim: true,
    },

    // Notification message
    message: {
      type: String,
      required: [true, "Notification message is required"],
      trim: true,
    },

    // Read/Unread status
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notification", notificationSchema);