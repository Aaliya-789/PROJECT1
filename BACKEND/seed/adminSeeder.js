const mongoose = require("mongoose");
const User = require("../models/User");
require("dotenv").config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Database connected");

    const adminExists = await User.findOne({
      email: "admin@civicconnect.com",
    });

    if (adminExists) {
      console.log("Admin already exists");
      process.exit();
    }

    await User.create({
      name: "System Admin",
      email: "admin@civicconnect.com",
      password: "Admin@123",
      role: "Admin",
    });

    console.log("Admin created successfully");

    process.exit();

  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

createAdmin();