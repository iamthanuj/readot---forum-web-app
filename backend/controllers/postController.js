const asyncHandler = require("express-async-handler");
const Post = require('../models/postModel')


//@desc Get posts
//@route GET/api/posts
//@access private
const getPosts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Posts" });
});



//@desc Get posts
//@route GET/api/posts
//@access private
const createPost = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text");
  }

  console.log(req.body);
  res.status(200).json({ message: req.body });
});



//@desc Update posts
//@route PUT/api/posts
//@access private
const updatePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `${req.params.id} is updated` });
});





//@desc Get posts
//@route GET/api/posts
//@access private
const deletePost = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `${req.params.id} is deleted` });
});

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
