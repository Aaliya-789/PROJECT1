const Complaint = require("../models/Complaint");
const Department = require("../models/Department");
// ==========================================
// Create Complaint
// POST /api/complaints
// Private (Citizen)
// ==========================================

const createComplaint = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      priority,
      latitude,
      longitude,
      address,
    } = req.body;

    // Validate required fields
    if (
      !title ||
      !description ||
      !category ||
      !latitude ||
      !longitude ||
      !address
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Create complaint
    const complaint = await Complaint.create({
      title,
      description,
      category,
      priority,
      location: {
        latitude,
        longitude,
      },
      address,
      reportedBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Complaint submitted successfully",
      complaint,
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
// Get Logged-in User Complaints
// GET /api/complaints/my
// ==========================================

const getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
  reportedBy: req.user._id,
})
.sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
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

// ==========================================
// Get Complaint by ID
// GET /api/complaints/:id
// ==========================================

const getComplaintById = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id)
      .populate("reportedBy", "name email")
      //.populate("assignedDepartment")
      //.populate("comments");

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    res.status(200).json({
      success: true,
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Get All Complaints (Admin)
// GET /api/complaints
// ==========================================

const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find()
      .populate("reportedBy", "name email")
      .populate("assignedDepartment")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
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

// ==========================================
// Update Complaint Status
// PUT /api/complaints/:id/status
// ==========================================

const updateComplaintStatus = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    complaint.status = req.body.status || complaint.status;

    await complaint.save();

    res.status(200).json({
      success: true,
      message: "Complaint status updated",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ==========================================
// Assign Complaint to Department (Admin)
// PUT /api/complaints/:id/assign
// ==========================================

const assignComplaintToDepartment = async (req, res) => {
  try {
    const { departmentId } = req.body;

    // Check if department is provided
    if (!departmentId) {
      return res.status(400).json({
        success: false,
        message: "Department ID is required",
      });
    }

    // Find complaint
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    // Assign department
    complaint.assignedDepartment = departmentId;
    complaint.status = "Assigned";

    await complaint.save();

    res.status(200).json({
      success: true,
      message: "Complaint assigned successfully",
      complaint,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Delete Complaint
// DELETE /api/complaints/:id
// ==========================================

const deleteComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    await complaint.deleteOne();

    res.status(200).json({
      success: true,
      message: "Complaint deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createComplaint,
  getMyComplaints,
  getComplaintById,
  getAllComplaints,
  updateComplaintStatus,
  assignComplaintToDepartment,
  deleteComplaint,
};