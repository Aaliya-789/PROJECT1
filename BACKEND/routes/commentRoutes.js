const express = require("express");
const router = express.Router();

const {
  addComment,
  getComments,
} = require("../controllers/commentController");

const { protect } = require("../middleware/authMiddleware");

// ==========================================
// Add Comment
// POST /api/comments/:complaintId
// ==========================================

router.post(
  "/:complaintId",
  protect,
  addComment
);

// ==========================================
// Get All Comments of a Complaint
// GET /api/comments/:complaintId
// ==========================================

router.get(
  "/:complaintId",
  protect,
  getComments
);

module.exports = router;