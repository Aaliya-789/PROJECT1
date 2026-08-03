const express = require("express");

const router = express.Router();

const {
  getAllCitizens,
  getMyProfile,
  updateMyProfile,
  changePassword,
} = require("../controllers/userController");

const { protect, authorize } = require("../middleware/authMiddleware");

// ==========================================
// Get Logged-in User Profile
// GET /api/users/me
// ==========================================

router.get(
  "/me",
  protect,
  getMyProfile
);

// ==========================================
// Update Logged-in User Profile
// PUT /api/users/me
// ==========================================

router.put(
  "/me",
  protect,
  updateMyProfile
);

// ==========================================
// Change Password
// PUT /api/users/change-password
// ==========================================

router.put(
  "/change-password",
  protect,
  changePassword
);

// ==========================================
// Get All Citizens (Admin)
// GET /api/users/citizens
// ==========================================

router.get(
  "/citizens",
  protect,
  authorize("Admin"),
  getAllCitizens
);

module.exports = router;