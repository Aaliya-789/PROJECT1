const express = require("express");
const router = express.Router();

const {
    createDepartment,
    getDepartments
} = require("../controllers/departmentController");

const { protect, authorize } = require("../middleware/authMiddleware");


// Admin creates department
router.post(
    "/",
    protect,
    authorize("Admin"),
    createDepartment
);


// Get departments
router.get(
    "/",
    protect,
    getDepartments
);


module.exports = router;