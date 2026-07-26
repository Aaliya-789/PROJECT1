const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Complaint title is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Garbage",
        "Pothole",
        "Water Leakage",
        "Broken Street Light",
        "Traffic Signal",
        "Sewage",
        "Road Damage",
        "Illegal Dumping",
        "Others",
      ],
      required: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Emergency"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: [
        "Submitted",
        "Under Review",
        "Assigned",
        "In Progress",
        "Resolved",
        "Rejected",
      ],
      default: "Submitted",
    },

    images: [
      {
        type: String,
      },
    ],

    location: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    },

    address: {
      type: String,
      required: true,
    },

    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    assignedDepartment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      default: null,
    },

    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],

    upvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Complaint", complaintSchema);