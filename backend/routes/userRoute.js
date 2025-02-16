const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { checkUserAuth } = require('../controllers/userController');

const router = express.Router();

//get all users fror search 
router.get('/check-auth',authMiddleware,checkUserAuth)

module.exports = router