const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { multerMiddleware } = require('../config/cloudinary');
const { createPost, getAllPosts, createLeavePost, getAllLeavePosts } = require('../controllers/postController');
const router = express.Router();


//create post
router.post('/posts',authMiddleware,multerMiddleware.single('media'),createPost)

//get all posts
router.get('/posts',authMiddleware,getAllPosts)

//create post
router.post('/leaveposts',authMiddleware,multerMiddleware.single('media'),createLeavePost)

//get all posts
router.get('/leaveposts',authMiddleware,getAllLeavePosts)



module.exports = router;