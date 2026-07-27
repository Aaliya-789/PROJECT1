const express = require("express");

const {
  createComplaint,
  getMyComplaints,
  getComplaintById,
  getAllComplaints,
  updateComplaintStatus,
  assignComplaintToDepartment,
  deleteComplaint,
} = require("../controllers/complaintController");

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const upload = require("../middleware/uploadMiddleware");
const router = express.Router();

// Citizen Routes
router.post(
  "/",
  upload.array("images", 5),
  protect,
  createComplaint
);
router.get("/my", protect, getMyComplaints);

// Public/Protected Route
router.get("/:id", protect, getComplaintById);

// Admin Routes
router.get("/", protect, authorizeRoles("Admin"), getAllComplaints);
router.put("/:id/status", protect, authorizeRoles("Admin", "Department"), updateComplaintStatus);
router.delete("/:id", protect, authorizeRoles("Admin"), deleteComplaint);

// Assign Complaint to Department (Admin)
router.put(
  "/:id/assign",
  protect,
  authorizeRoles("Admin"),
  assignComplaintToDepartment
);
module.exports = router;