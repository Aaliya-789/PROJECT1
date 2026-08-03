const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// Register User
const registerUser = async (req, res) => {
  try {

    const { name, email, password, phone } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      phone,
      role: "Citizen",
    });

    const token = generateToken(user._id, user.role);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


// Login User
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;


    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide email and password",
      });
    }


    const user = await User.findOne({ email })
      .select("+password");


    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }


    // FIXED HERE
    const isMatch = await user.matchPassword(password);


    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }


    const token = generateToken(
      user._id,
      user.role
    );


    res.status(200).json({

      success: true,
      message: "Login successful",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },

    });


  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};


// Get Profile
const getProfile = async (req, res) => {

  try {

    res.status(200).json({
      success: true,
      user: req.user,
    });


  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message,
    });

  }

};


// Update Profile
const updateProfile = async (req,res)=>{

  try{

    const {
      name,
      phone,
      profilePic
    } = req.body;


    const user = await User.findById(req.user._id);


    if(!user){
      return res.status(404).json({
        success:false,
        message:"User not found"
      });
    }


    user.name = name || user.name;
    user.phone = phone || user.phone;
    user.profilePic = profilePic || user.profilePic;


    const updatedUser = await user.save();


    res.status(200).json({

      success:true,
      message:"Profile updated successfully",

      user:{
        id:updatedUser._id,
        name:updatedUser.name,
        email:updatedUser.email,
        phone:updatedUser.phone,
        profilePic:updatedUser.profilePic,
        role:updatedUser.role
      }

    });


  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};


// Change Password
const changePassword = async(req,res)=>{

  try{

    const {
      currentPassword,
      newPassword
    } = req.body;


    if(!currentPassword || !newPassword){

      return res.status(400).json({
        success:false,
        message:"Please provide current and new password"
      });

    }


    const user = await User.findById(req.user._id)
      .select("+password");


    // FIXED HERE
    const isMatch = await user.matchPassword(currentPassword);



    if(!isMatch){

      return res.status(400).json({
        success:false,
        message:"Current password is incorrect"
      });

    }



    user.password = newPassword;


    await user.save();



    res.status(200).json({

      success:true,
      message:"Password changed successfully"

    });


  }catch(error){

    res.status(500).json({
      success:false,
      message:error.message
    });

  }

};


module.exports = {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  changePassword,
};