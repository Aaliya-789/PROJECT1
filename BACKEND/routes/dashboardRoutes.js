const express = require("express");
const router = express.Router();

const {
  getDashboard,
  getDepartmentDashboard,
} = require("../controllers/dashboardController");

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

// ================= Admin Dashboard =================
router.get(
  "/",
  protect,
  authorizeRoles("Admin"),
  getDashboard
);

// ================= Department Dashboard =================
router.get(
  "/department",
  protect,
  authorizeRoles("Department"),
  getDepartmentDashboard
);

module.exports = router;