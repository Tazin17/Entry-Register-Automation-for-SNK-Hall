const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { multerMiddleware } = require('../config/cloudinary');
const { createPost, getAllPosts, getPostByUserId, likePost, sharePost, addCommentToPost } = require('../controllers/postController');
const router = express.Router();


//create post
router.post('/posts',authMiddleware,multerMiddleware.single('media'),createPost)

//get all posts
router.get('/posts',authMiddleware,getAllPosts)

//get post by userid
router.get('/posts/user/:userId',authMiddleware,getPostByUserId)


//user like post route
router.post('/posts/likes/:postId',authMiddleware,likePost)


//user share post route
router.post('/posts/share/:postId',authMiddleware,sharePost)


//user comments post route
router.post('/posts/comments/:postId',authMiddleware,addCommentToPost)







module.exports = router;