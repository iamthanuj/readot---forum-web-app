const mongoose = require('mongoose')
const asyncHandler = require("express-async-handler");
const Post = require('../models/postModel')


//@desc Get posts
//@route GET/api/posts
//@access private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find()

  res.status(200).json(posts);
});



//@desc Create posts
//@route POST/api/posts/ceate
//@access private
const createPost = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.desc || !req.body.image) {
    res.status(400);
    throw new Error("Please add a text");
  }

  const post = await Post.create({
    title: req.body.title,
    description : req.body.desc,
    image: req.body.image

  })

  res.status(200).json(post);
});



//@desc Update posts
//@route PUT/api/posts
//@access private
const updatePost = asyncHandler(async (req, res) => {

  const post = await Post.findById(req.params.id)

  if(!post){
    res.status(400)
    throw new Error('Post Not Found')
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true})

  res.status(200).json(updatePost);
});





//@desc DELETE posts
//@route DELETE/api/posts
//@access private
const deletePost = asyncHandler(async (req, res) => {

  const post = await Post.findById(req.params.id)

  if(!post){
    res.status(400)
    throw new Error('Post Not Found')
  }

  await Post.deleteOne(``)

  res.status(200).json({ message: `${req.params.id} is deleted` });
});

module.exports = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
