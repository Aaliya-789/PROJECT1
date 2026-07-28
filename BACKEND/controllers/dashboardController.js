const Complaint = require("../models/Complaint");
const User = require("../models/User");
const Department = require("../models/Department");

const getDashboard = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({
      role: "Citizen",
    });

    const totalComplaints = await Complaint.countDocuments();

    const resolvedComplaints = await Complaint.countDocuments({
      status: "Resolved",
    });

    const totalDepartments = await Department.countDocuments();

    const recentComplaints = await Complaint.find()
      .populate("reportedBy", "name")
      .sort({ createdAt: -1 })
      .limit(5);

    const monthlyData = await Complaint.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          "_id": 1,
        },
      },
    ]);

    res.status(200).json({
      success: true,

      cards: {
        totalUsers,
        totalComplaints,
        resolvedComplaints,
        totalDepartments,
      },

      recentComplaints,

      monthlyData,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboard,
};