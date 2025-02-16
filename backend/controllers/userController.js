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

module.exports= { checkUserAuth }