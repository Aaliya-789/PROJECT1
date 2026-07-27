const express = require("express");
const router = express.Router();

const { getDashboardStats } = require("../controllers/adminController");
const { protect, authorize } = require("../middleware/authMiddleware");

// ==========================================
// Admin Dashboard
// GET /api/admin/dashboard
// ==========================================

router.get(
  "/dashboard",
  protect,
  authorize("Admin"),
  getDashboardStats
);

module.exports = router;