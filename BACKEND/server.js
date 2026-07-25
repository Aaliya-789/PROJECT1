require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");

// Connect to MongoDB
connectDB();

// Define Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});