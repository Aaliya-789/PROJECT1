const Complaint = require("../models/Complaint");
const User = require("../models/User");
const Department = require("../models/Department");

// ==============================
// Admin Dashboard
// ==============================
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
          _id: 1,
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

// ==============================
// Department Dashboard
// ==============================
const getDepartmentDashboard = async (req, res) => {
  try {
    const officerId = req.user._id;

    const department = await Department.findOne({
      headOfficer: officerId,
    });

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    const assigned = await Complaint.countDocuments({
      assignedDepartment: department._id,
      status: "Assigned",
    });

    const inProgress = await Complaint.countDocuments({
      assignedDepartment: department._id,
      status: "In Progress",
    });

    const resolved = await Complaint.countDocuments({
      assignedDepartment: department._id,
      status: "Resolved",
    });

    const total = await Complaint.countDocuments({
      assignedDepartment: department._id,
    });

    const recentComplaints = await Complaint.find({
      assignedDepartment: department._id,
    })
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      stats: {
        assigned,
        inProgress,
        resolved,
        total,
      },
      department,
      recentComplaints,
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
  getDepartmentDashboard,
};