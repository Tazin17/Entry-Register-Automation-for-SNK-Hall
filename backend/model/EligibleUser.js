const mongoose = require("mongoose");

const EligibleUserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  hallname: { type: String, required: true },
}, { timestamps: true });

const EligibleUser = mongoose.model("EligibleUser", EligibleUserSchema);

module.exports = EligibleUser;