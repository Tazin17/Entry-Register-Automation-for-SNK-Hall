const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  username: { type: String, required: true },
  status: {type: Boolean, default: true}
},{timestamps:true});


const User=mongoose.model('Staff', StaffSchema)
module.exports = User;