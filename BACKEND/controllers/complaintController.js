const Complaint = require("../models/Complaint");
const Department = require("../models/Department");
const Notification = require("../models/Notification");
const cloudinary = require("../config/cloudinary");
const Comment = require("../models/Comment");

// ==========================================
// Create Complaint
// POST /api/complaints
// Private (Citizen)
// ==========================================
const createComplaint = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);
    console.log("CONTENT-TYPE:", req.headers["content-type"]);

    const title = req.body.title;
    const description = req.body.description;
    const category = req.body.category;
    const priority = req.body.priority || "Medium";

    // Supports nested FormData:
    // location[address]
    // location[latitude]
    // location[longitude]
    const address = req.body.address;
const latitude = Number(req.body.latitude);
const longitude = Number(req.body.longitude);

    console.log("TITLE:", title);
    console.log("DESCRIPTION:", description);
    console.log("CATEGORY:", category);
    console.log("ADDRESS:", address);
    console.log("LATITUDE:", latitude);
    console.log("LONGITUDE:", longitude);

    if (
      !title ||
      !description ||
      !category ||
      !address ||
      isNaN(latitude) ||
      isNaN(longitude)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Upload images to Cloudinary
    const uploadedImages = [];

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const base64 = `data:${file.mimetype};base64,${file.buffer.toString(
          "base64"
        )}`;

        const result = await cloudinary.uploader.upload(base64, {
          folder: "CivicConnect/Complaints",
        });

        uploadedImages.push(result.secure_url);
      }
    }

    // Create Complaint
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
      images: uploadedImages,
      reportedBy: req.user._id,
    });

    // Create Notification
    await Notification.create({
      user: req.user._id,
      complaint: complaint._id,
      title: "Complaint Submitted",
      message: `Your complaint "${complaint.title}" has been submitted successfully.`,
    });

    res.status(201).json({
      success: true,
      message: "Complaint submitted successfully",
      complaint,
    });
  } catch (error) {
    console.error("CREATE COMPLAINT ERROR:", error);

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
    }).sort({ createdAt: -1 });

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
      .populate("assignedDepartment", "departmentName")
      .populate({
        path: "comments",
        populate: {
          path: "user",
          select: "name role",
        },
      });

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
    const { status, category, search } = req.query;

    const filter = {};

    if (status) filter.status = status;
    if (category) filter.category = category;

    if (search) {
      filter.$or = [
        {
          title: {
            $regex: search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: search,
            $options: "i",
          },
        },
        {
          address: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    const complaints = await Complaint.find(filter)
      .populate("reportedBy", "name email")
      .populate("assignedDepartment", "departmentName")
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

    if (req.user.role === "Department") {
      const department = await Department.findOne({
        headOfficer: req.user._id,
      });

      if (!department) {
        return res.status(404).json({
          success: false,
          message: "Department not found",
        });
      }

      if (
        !complaint.assignedDepartment ||
        complaint.assignedDepartment.toString() !==
          department._id.toString()
      ) {
        return res.status(403).json({
          success: false,
          message: "You are not authorized to update this complaint",
        });
      }
    }

    const allowedStatuses = [
      "Submitted",
      "Under Review",
      "Assigned",
      "In Progress",
      "Resolved",
      "Rejected",
    ];

    if (!allowedStatuses.includes(req.body.status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    complaint.status = req.body.status;

    await complaint.save({
      validateModifiedOnly: true,
    });

    if (req.body.message && req.body.message.trim() !== "") {
      const comment = await Comment.create({
        complaint: complaint._id,
        user: req.user._id,
        message: req.body.message,
      });

      complaint.comments.push(comment._id);

      await complaint.save({
        validateModifiedOnly: true,
      });
    }

    await Notification.create({
      user: complaint.reportedBy,
      complaint: complaint._id,
      title: "Complaint Updated",
      message: `Status: ${complaint.status}

${
  req.body.message
    ? `Remark: ${req.body.message}`
    : "No remarks provided."
}`,
    });

    res.status(200).json({
      success: true,
      message: "Complaint status updated successfully",
      complaint,
    });
  } catch (error) {
    console.log("UPDATE STATUS ERROR:", error);

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
// ==========================================
// Assign Complaint to Department (Admin)
// PUT /api/complaints/:id/assign
// ==========================================
const assignComplaintToDepartment = async (req, res) => {
  try {
    const { departmentId } = req.body;

    if (!departmentId) {
      return res.status(400).json({
        success: false,
        message: "Department ID is required",
      });
    }

    const department = await Department.findById(departmentId);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    complaint.assignedDepartment = department._id;
    complaint.status = "Assigned";

    await complaint.save();

    await Notification.create({
      user: complaint.reportedBy,
      complaint: complaint._id,
      title: "Complaint Assigned",
      message: `Your complaint has been assigned to "${department.departmentName}".`,
    });

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

// ==========================================
// Department Dashboard
// GET /api/complaints/department/dashboard
// ==========================================
const getDepartmentDashboard = async (req, res) => {
  try {
    console.log("========== Department Dashboard ==========");
    console.log("Logged in User:", req.user);

    const department = await Department.findOne({
      headOfficer: req.user._id,
    });

    console.log("Department Found:", department);

    if (!department) {
      return res.status(404).json({
        success: false,
        message: "Department not found",
      });
    }

    const complaints = await Complaint.find({
      assignedDepartment: department._id,
    })
      .populate("reportedBy", "name")
      .sort({ createdAt: -1 });

    const assigned = complaints.filter(
      (c) => c.status === "Assigned"
    ).length;

    const inProgress = complaints.filter(
      (c) => c.status === "In Progress"
    ).length;

    const resolved = complaints.filter(
      (c) => c.status === "Resolved"
    ).length;

    const pending = complaints.filter(
      (c) =>
        c.status === "Submitted" ||
        c.status === "Under Review"
    ).length;

    res.status(200).json({
      success: true,
      officer: req.user.name,
      department: department.departmentName,
      stats: {
        assigned,
        inProgress,
        resolved,
        pending,
      },
      complaints,
    });
  } catch (error) {
    console.log(error);

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
  getDepartmentDashboard,
};