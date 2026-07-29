const Department = require("../models/Department");
const User = require("../models/User");
const Complaint = require("../models/Complaint");

// Create Department (Admin)
const createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);

    res.status(201).json({
      success: true,
      message: "Department created successfully",
      department,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get All Departments
const getDepartments = async (req, res) => {
  try {

    const departments = await Department.find()
      .populate("headOfficer", "name email");

    res.status(200).json({
      success: true,
      count: departments.length,
      departments,
    });

  } catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }
};

// ==========================================
// Update Department (Admin)
// PUT /api/departments/:id
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
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Delete Department (Admin)
// DELETE /api/departments/:id
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
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ==========================================
// Create Department Officer (Admin)
// POST /api/departments/:id/officer
// ==========================================

const createDepartmentOfficer = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Check department exists
    const department = await Department.findById(req.params.id);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    // Check email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Create Department Officer
    const officer = await User.create({
      name,
      email,
      password,
      phone,
      role: "Department",
    });

    // Link officer to department
    department.headOfficer = officer._id;
    await department.save();

    res.status(201).json({
      success: true,
      message: "Department Officer created successfully",
      officer,
      department,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ==========================================
// Get Complaints Assigned to Logged-in Department Officer
// GET /api/departments/my-complaints
// ==========================================

const getMyDepartmentComplaints = async (req, res) => {
  try {
    // Find department where logged-in user is the head officer
    const department = await Department.findOne({
      headOfficer: req.user._id,
    });

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "No department assigned to this officer",
      });
    }

    // Get complaints assigned to this department
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