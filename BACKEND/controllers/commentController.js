const Comment = require("../models/Comment");
const Complaint = require("../models/Complaint");

// ==========================================
// Add Comment
// POST /api/comments/:complaintId
// ==========================================

const addComment = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Comment message is required",
      });
    }

    // Check complaint exists
    const complaint = await Complaint.findById(req.params.complaintId);

    if (!complaint) {
      return res.status(404).json({
        success: false,
        message: "Complaint not found",
      });
    }

    // Create comment
    const comment = await Comment.create({
      complaint: complaint._id,
      user: req.user._id,
      message,
    });

    // Link comment to complaint
    complaint.comments.push(comment._id);
    await complaint.save();

    res.status(201).json({
      success: true,
      message: "Comment added successfully",
      comment,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================================
// Get Comments of a Complaint
// GET /api/comments/:complaintId
// ==========================================

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      complaint: req.params.complaintId,
    })
      .populate("user", "name role")
      .sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      count: comments.length,
      comments,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addComment,
  getComments,
};