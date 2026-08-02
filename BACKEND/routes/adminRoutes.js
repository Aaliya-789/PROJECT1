const express = require("express");
const router = express.Router();

const {
  getDashboardStats,
  getAnalytics,
  getReports,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/adminController");

const { protect, authorize } = require("../middleware/authMiddleware");

// ==========================================
// Dashboard
// ==========================================
router.get(
  "/dashboard",
  protect,
  authorize("Admin"),
  getDashboardStats
);

// ==========================================
// Analytics
// ==========================================
router.get(
  "/analytics",
  protect,
  authorize("Admin"),
  getAnalytics
);

// ==========================================
// Reports
// ==========================================
router.get(
  "/reports",
  protect,
  authorize("Admin"),
  getReports
);

// ==========================================
// Users
// ==========================================
router.get(
  "/users",
  protect,
  authorize("Admin"),
  getAllUsers
);

router.get(
  "/users/:id",
  protect,
  authorize("Admin"),
  getUserById
);

router.put(
  "/users/:id",
  protect,
  authorize("Admin"),
  updateUser
);

router.delete(
  "/users/:id",
  protect,
  authorize("Admin"),
  deleteUser
);

module.exports = router;