const User = require("../models/User");

// ==========================================
// Get All Citizens
// GET /api/users/citizens
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

module.exports = {
  getAllCitizens,
};