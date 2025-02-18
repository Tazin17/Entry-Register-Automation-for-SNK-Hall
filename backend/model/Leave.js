const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});

const Leave = mongoose.model("Leave", leaveSchema);

module.exports = Leave;
