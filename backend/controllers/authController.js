const User = require("../model/User");
const EligibleUser = require("../model/EligibleUser");
const Admin = require("../model/Admin")
const response = require("../utils/responseHandler");
const { generateToken } = require("../utils/generateToken"); 

const registerUser = async (req, res) => {
    try{
        const { username, id, contact_no, email, password, confirmPassword  } = req.body;

        if (!username || !email || !password || !id || !contact_no ) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const existingUser = await User.findOne({ id });
        if (existingUser) {
            return response(res, 400, 'User with this studentID already exists');
        }

        const getDepartment = (studentID) => {
            if( studentID.slice(2,4) === '01'){
                return "CE";
            } else if( studentID.slice(2,4) === '02'){
              return "EEE";
            } else if( studentID.slice(2,4) === '03'){
              return "ME";
            } else if( studentID.slice(2,4) === '04'){
            return "CSE";
            } else if( studentID.slice(2,4) === '05'){
                return "URP";
            } else if( studentID.slice(2,4) === '06'){
              return "ARCHI";
            } else if( studentID.slice(2,4) === '07'){
              return "PME";
            } else if( studentID.slice(2,4) === '08'){
            return "ETE";
            } else if( studentID.slice(2,4) === '09'){
              return "MIE";
            } else if( studentID.slice(2,4) === '10'){
              return "WRE";
            } else if( studentID.slice(2,4) === '11'){
              return "BME";
            } else if( studentID.slice(2,4) === '12'){
            return "MSE";
            } 
          }
        const department = getDepartment(id); 
        
        const getBatch = (studentID) => {
            return "20" + studentID.slice(0,2);
        }

        const batch = getBatch(id);

        console.log(username,
            id, batch , email,
            department,contact_no);

        const eligibilityCriteria = {
            username,
            id 
        };

        const eligibleUser = await EligibleUser.findOne(eligibilityCriteria);
        if (!eligibleUser ) {
            return response(res, 403, 'You are not eligible to register. Please contact support if this is a mistake.');
        }
        if (eligibleUser.hallname !== 'SNKH') {
            return response(res, 403, 'You are not from SNKH. Contact with Authority');
        }

        const newUser = new User({
            username,
            email,
            password,
            id,
            department,
            batch,
            contact_no,
        });
        await newUser.save();

        const accessToken = generateToken(newUser);

      
        res.cookie("auth_token", accessToken, {
            httpOnly: true,
        });

        
        return response(res, 201, "User created successfully", {
            name: newUser.username,
            email: newUser.email,
        });


    } catch (error) {
        console.error(error);
        return response(res, 500, "Internal Server Error", error.message);
    }
}
const loginUser = async(req,res) => {
    try{
        const {id, password } = req.body
        // check the existing username with email
        const admin = await Admin.findOne({id})
        if( !admin ){
            try{
                const user = await User.findOne({id})
                if( !user){
                    return response(res,404,'User not found with this email')
                }
                if( password != user.password){
                    return response(res,404,'Invalid User Password')
                }
                const accessToken = generateToken(user);
                res.cookie('auth_token', accessToken, {
                    httpOnly: true
                })
                return response(res,201,"User logged In Succssfully",{
                    username: user.username,
                    email: user.email
                })
            } catch (error) {
                console.error(error)
                return response(res,500, "Internal Server Error")
            }
        }

        if( password != admin.password){
            return response(res,404,'Invalid Admin Password')
        }
        
        const accessToken = generateToken(admin);
        res.cookie('auth_token', accessToken, {
            httpOnly: true
        })
        return response(res,201,"Admin logged In Succssfully",{
            id : admin.id,
        })
    } catch (error) {
        console.error(error)
        return response(res,500, "Internal Server Error for admin")
    }
}
const logout = (req,res) => {
    try{
        res.cookie("auth_token", " ",{
            httpOnly: true,
            expires: new Date(0)
        })
        return response(res,200,"User logged out successfully")
    } catch( error ) {
        console.error(error)
        return response(res,500, "Internal Server Error")
    }
}

module.exports = { registerUser, loginUser, logout };