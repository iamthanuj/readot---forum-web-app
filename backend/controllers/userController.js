const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asynchandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc register user
//@route POST/api/users
//@access public
const registerUser = asynchandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Pleas fill the fields");
  }

  //check user already registered
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.firstName,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc Authenticate user
//@route POST/api/users/login
//@access public
const loginUser = asynchandler(async (req, res) => {
  res.status(200).json({ message: " login user" });
});

//@desc Get user data
//@route GEt/api/users/me
//@access public
const getUser = asynchandler(async (req, res) => {
  res.status(200).json({ message: " login user" });
});

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
