const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { checkUserAuth, getAllUser, getUserCount } = require('../controllers/userController');

const router = express.Router();

//get all users from search 
router.get('/check-auth',authMiddleware,checkUserAuth)

//get all user
router.get('/user',authMiddleware,getAllUser)

//get all user count
router.get('/usercount',authMiddleware,getUserCount)

module.exports = router