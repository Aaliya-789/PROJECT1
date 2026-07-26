const Department = require("../models/Department");

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


module.exports = {
  createDepartment,
  getDepartments,
};