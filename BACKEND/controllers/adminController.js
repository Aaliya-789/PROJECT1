const Complaint = require("../models/Complaint");
const Department = require("../models/Department");
const User = require("../models/User");

const getDashboardStats = async (req, res) => {
  try {
    const totalComplaints = await Complaint.countDocuments();

    const submitted = await Complaint.countDocuments({
      status: "Submitted",
    });

    const assigned = await Complaint.countDocuments({
      status: "Assigned",
    });

    const inProgress = await Complaint.countDocuments({
      status: "In Progress",
    });

    const resolved = await Complaint.countDocuments({
      status: "Resolved",
    });

    const rejected = await Complaint.countDocuments({
      status: "Rejected",
    });

    const totalDepartments = await Department.countDocuments();

    const totalCitizens = await User.countDocuments({
      role: "Citizen",
    });

    const totalDepartmentOfficers = await User.countDocuments({
      role: "Department",
    });

    res.status(200).json({
      success: true,
      stats: {
        totalComplaints,
        submitted,
        assigned,
        inProgress,
        resolved,
        rejected,
        totalDepartments,
        totalCitizens,
        totalDepartmentOfficers,
      },
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
};