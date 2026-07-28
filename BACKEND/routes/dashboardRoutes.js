const express = require("express");
const router = express.Router();

const { getDashboard } = require("../controllers/dashboardController");

const { protect } = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.get(
  "/",
  protect,
  authorizeRoles("Admin"),
  getDashboard
);

module.exports = router;