const Department = require("../models/Department");
const User = require("../models/User");
const Complaint = require("../models/Complaint");

// ==========================================
// Create Department (Admin)
// ==========================================

const createDepartment = async (req, res) => {
  try {
    console.log("===== CREATE DEPARTMENT =====");
    console.log("Request Body:", req.body);

    const department = await Department.create(req.body);

    console.log("Department Created:", department);

    res.status(201).json({
      success: true,
      message: "Department created successfully",
      department,
    });

  } catch (error) {
    console.error("===== CREATE DEPARTMENT ERROR =====");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// Get All Departments
// ==========================================

const getDepartments = async (req, res) => {
  try {

    const departments = await Department.find()
      .populate("headOfficer", "name email");

    res.status(200).json({
      success: true,
      count: departments.length,
      departments,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==========================================
// Update Department
// ==========================================

const updateDepartment = async (req, res) => {
  try {

    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    const updatedDepartment = await Department.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Department updated successfully",
      department: updatedDepartment,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==========================================
// Delete Department
// ==========================================

const deleteDepartment = async (req, res) => {
  try {

    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    await department.deleteOne();

    res.status(200).json({
      success: true,
      message: "Department deleted successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// ==========================================
// Create Department Officer
// ==========================================

const createDepartmentOfficer = async (req, res) => {
  try {
    console.log("===== CREATE DEPARTMENT OFFICER =====");
    console.log("Department ID:", req.params.id);
    console.log("Request Body:", req.body);

    const { name, email, password, phone } = req.body;

    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const officer = await User.create({
      name,
      email,
      password,
      phone,
      role: "Department",
    });

    console.log("Officer Created:", officer);

    department.headOfficer = officer._id;
    await department.save();

    res.status(201).json({
      success: true,
      message: "Department Officer created successfully",
      officer,
      department,
    });

  } catch (error) {
    console.error("===== CREATE OFFICER ERROR =====");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// ==========================================
// Get My Department Complaints
// ==========================================

const getMyDepartmentComplaints = async (req, res) => {
  try {

    const department = await Department.findOne({
      headOfficer: req.user._id,
    });

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "No department assigned to this officer",
      });
    }

    const complaints = await Complaint.find({
      assignedDepartment: department._id,
    })
      .populate("reportedBy", "name email")
      .populate("assignedDepartment", "departmentName")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      department: department.departmentName,
      count: complaints.length,
      complaints,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = {
  createDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
  createDepartmentOfficer,
  getMyDepartmentComplaints,
};