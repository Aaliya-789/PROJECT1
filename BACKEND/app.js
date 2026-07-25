const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Default Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Civic Connect API 🚀"
    });
});

module.exports = app;