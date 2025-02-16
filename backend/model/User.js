const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  department: { type: String, required: true},
  batch: { type: Number, required: true},
  contact_no: { type: String, required: true},
  room_no: {type: String, default: "Not Allocated"},
  lateRecord: [{ type: Number, default: 0}],
  status: {type: Boolean, default: false},
  profilePicture:{type:String, defaullt:null},
  coverPicture:{type:String, default:null},
  
},{timestamps:true});


const User=mongoose.model('User', UserSchema)
module.exports = User;