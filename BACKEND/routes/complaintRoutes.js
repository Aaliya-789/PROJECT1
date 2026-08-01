const express = require("express");
const router = express.Router();

const {
  createComplaint,
  getMyComplaints,
  getComplaintById,
  getAllComplaints,
  updateComplaintStatus,
  assignComplaintToDepartment,
  deleteComplaint,
  getDepartmentDashboard,
} = require("../controllers/complaintController");

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");

// ==========================================
// Citizen Routes
// ==========================================
router.post(
  "/",
  upload.array("images", 5),
  protect,
  createComplaint
);

router.get(
  "/my",
  protect,
  getMyComplaints
);

// ==========================================
// Department Dashboard
// ==========================================
router.get(
  "/department/dashboard",
  protect,
  authorizeRoles("Department"),
  getDepartmentDashboard
);

// ==========================================
// Admin Routes
// ==========================================
router.get(
  "/",
  protect,
  authorizeRoles("Admin"),
  getAllComplaints
);

router.put(
  "/:id/status",
  protect,
  authorizeRoles("Admin", "Department"),
  updateComplaintStatus
);

router.put(
  "/:id/assign",
  protect,
  authorizeRoles("Admin"),
  assignComplaintToDepartment
);

router.delete(
  "/:id",
  protect,
  authorizeRoles("Admin"),
  deleteComplaint
);

// ==========================================
// Complaint Details
// Keep this LAST
// ==========================================
router.get(
  "/:id",
  protect,
  getComplaintById
);

module.exports = router;