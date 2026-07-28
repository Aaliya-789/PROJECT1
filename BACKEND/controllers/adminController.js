const Complaint = require("../models/Complaint");
const Department = require("../models/Department");
const User = require("../models/User");

// ==========================================
// Dashboard Statistics
// GET /api/admin/dashboard
// ==========================================
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

// ==========================================
// Get All Users
// GET /api/admin/users
// ==========================================
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Get User By ID
// GET /api/admin/users/:id
// ==========================================
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Update User
// PUT /api/admin/users/:id
// ==========================================
const updateUser = async (req, res) => {
  try {
    const { name, email, phone, role } = req.body;

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    user.role = role || user.role;

    const updatedUser = await user.save();

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: {
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        role: updatedUser.role,
        profilePic: updatedUser.profilePic,
        isVerified: updatedUser.isVerified,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Delete User
// DELETE /api/admin/users/:id
// ==========================================
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    await user.deleteOne();

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
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
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};