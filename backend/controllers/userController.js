const Admin = require('../model/Admin');
const User = require('../model/User')
const Staff = require('../model/Staff')
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

const getUserCount = async (req, res) => {
    try {
        // Get the total number of users
        const userCount = await User.countDocuments();

        // Get the total number of staff
        const staffCount = await Staff.countDocuments();

        // Get the number of users whose status is true
        const activeUserCount = await User.countDocuments({ status: true });

        // Get the number of staff whose status is true
        const activeStaffCount = await Staff.countDocuments({ status: true });

        // Return the response with status 200 (OK)
        return response(res, 200, 'Get user counts successfully', {
            userCount,
            staffCount,
            activeUserCount,
            activeStaffCount
        });
    } catch (error) {
        // Log the error and return a 500 error message
        console.log('Error fetching user counts:', error);
        return response(res, 500, 'Internal server error', error.message);
    }
};


module.exports= { checkUserAuth , getAllUser, getUserCount }