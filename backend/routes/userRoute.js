const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { checkUserAuth, getAllUser,getUserProfile } = require('../controllers/userController');

const router = express.Router();

//get all users from search 
router.get('/check-auth',authMiddleware,checkUserAuth)

//get all user
router.get('/user',authMiddleware,getAllUser)
router.get('/profile/:userId',authMiddleware,getUserProfile)

module.exports = router