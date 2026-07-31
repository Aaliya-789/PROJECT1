const express = require("express");

const router = express.Router();

const { getAllCitizens } = require("../controllers/userController");

const { protect, authorize } = require("../middleware/authMiddleware");

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