const User = require("../models/User");

// ==========================================
// Get All Citizens (Admin)
// ==========================================

const getAllCitizens = async (req, res) => {
  try {
    const citizens = await User.find({
      role: "Citizen",
    }).select("-password");

    res.status(200).json({
      success: true,
      count: citizens.length,
      citizens,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Get Logged-in User Profile
// ==========================================

const getMyProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user._id)
      .select("-password");

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
// Update Logged-in User Profile
// ==========================================

const updateMyProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
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
// Change Password
// ==========================================

const changePassword = async (req, res) => {
  try {

    const { currentPassword, newPassword } = req.body;


    const user = await User.findById(req.user._id)
      .select("+password");


    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }


    const isMatch = await user.matchPassword(
      currentPassword
    );


    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect",
      });
    }


    user.password = newPassword;


    await user.save();


    res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });


  } catch (error) {

    console.error("CHANGE PASSWORD ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};
module.exports = {
  getAllCitizens,
  getMyProfile,
  updateMyProfile,
  changePassword,
};