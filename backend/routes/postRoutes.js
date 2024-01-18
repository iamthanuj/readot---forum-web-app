const express = require('express')
const router = express.Router()
const {getPosts, createPost, updatePost, deletePost} = require('../controllers/postController')
const {protect} = require('../middleware/authMiddleware')

router.get('/',protect, getPosts)

router.post('/create/',protect, createPost)


router.put('/update/:id', protect,updatePost)


router.delete('/delete/:id',protect, deletePost)


module.exports = router