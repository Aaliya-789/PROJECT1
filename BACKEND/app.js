const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const app = express();

/* ===========================
   Middlewares
=========================== */

// Allow requests from frontend
app.use(cors());

// Parse incoming JSON
app.use(express.json());

// Parse URL encoded data
app.use(express.urlencoded({ extended: true }));

// Parse Cookies
app.use(cookieParser());

// Show API requests in terminal
app.use(morgan("dev"));

/* ===========================
   Default Route
=========================== */

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Civic Connect API 🚀"
    });
});

/* ===========================
   Routes
   (We'll add these later)
=========================== */

// app.use("/api/auth", require("./routes/authRoutes"));
// app.use("/api/users", require("./routes/userRoutes"));
// app.use("/api/complaints", require("./routes/complaintRoutes"));
// app.use("/api/admin", require("./routes/adminRoutes"));
// app.use("/api/departments", require("./routes/departmentRoutes"));
// app.use("/api/comments", require("./routes/commentRoutes"));
// app.use("/api/notifications", require("./routes/notificationRoutes"));

/* ===========================
   Error Middleware
   (We'll create it later)
=========================== */

// app.use(errorMiddleware);

module.exports = app;