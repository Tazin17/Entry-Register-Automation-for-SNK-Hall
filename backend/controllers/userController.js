const Admin = require('../model/Admin');
const User = require('../model/User')
const response = require("../utils/responseHandler");

//check if user is authenticated or not 
const checkUserAuth = async(req, res) =>{
    try {
       const userId = req?.user?.userId;
       console.log(userId)
       if(!userId) return response(res,404, 'unauthenticated ! please login before access the data')

       //fetch the user details and excude sensitive information
       const user = await User.findById(userId).select('-password') || await Admin.findById(userId).select('-password');

       if(!user) {
        return response(res,403, 'User not found');
       }
       
       return response(res,201, 'User retrived and allow to use the entry-register system', user)
    } catch (error) {
       return response(res, 500, 'Internal server error', error.message)
    }
}
const getAllUser = async(req, res) => {
   try {
       const user = await User.find()
       .sort({createdAt: -1})

       return response(res, 201, 'Get all user successfully', user)
   } catch (error) {
       console.log('error getting user',error)
       return response(res,500,'Internal server error',error.message)
   }
}
const getUserProfile = async(req, res) =>{
    try {
        const {userId} = req.params;
        const loggedInUserId = req?.user?.userId

        //fetch the user details and excude sensitive information
        const userProfile = await User.findById(userId).select('-password').exec();

        if(!userProfile) return response(res,403, 'User not found')

        const isOwner = loggedInUserId === userId;

        return response(res,201, 'user profile get successfully', {profile:userProfile,isOwner})
     } catch (error) {
        return response(res, 500, 'Internal server error', error.message)
     }
}


module.exports= { checkUserAuth , getAllUser,getUserProfile }