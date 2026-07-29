const express = require("express");
const router = express.Router();

const {
  createDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
  createDepartmentOfficer,
  getMyDepartmentComplaints,
} = require("../controllers/departmentController");
const { protect, authorize } = require("../middleware/authMiddleware");

// ==========================================
// Create Department (Admin)
// POST /api/departments
// ==========================================
router.post(
  "/",
  protect,
  authorize("Admin"),
  createDepartment
);

// ==========================================
// Create Department Officer (Admin)
// POST /api/departments/:id/officer
// ==========================================
router.post(
  "/:id/officer",
  protect,
  authorize("Admin"),
  createDepartmentOfficer
);
// ==========================================
// Department Officer - Get My Assigned Complaints
// GET /api/departments/my-complaints
// ==========================================
router.get(
  "/my-complaints",
  protect,
  authorize("Department"),
  getMyDepartmentComplaints
);
// ==========================================
// Get All Departments
// GET /api/departments
// ==========================================

router.get(
  "/",
  protect,
  getDepartments
);

// ==========================================
// Update Department (Admin)
// PUT /api/departments/:id
// ==========================================
router.put(
  "/:id",
  protect,
  authorize("Admin"),
  updateDepartment
);

// ==========================================
// Delete Department (Admin)
// DELETE /api/departments/:id
// ==========================================
router.delete(
  "/:id",
  protect,
  authorize("Admin"),
  deleteDepartment
);
module.exports = router;