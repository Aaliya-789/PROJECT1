const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: [true, "Department name is required"],
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Department email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },

    headOfficer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    location: {
      type: String,
      required: [true, "Location is required"],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Department", departmentSchema);