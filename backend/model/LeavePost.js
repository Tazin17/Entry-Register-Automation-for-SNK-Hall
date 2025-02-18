const mongoose = require("mongoose");

const leavepostSchema = new mongoose.Schema(
  {
    
    startdate: { type: Date },
    enddate: { type: Date },
    content: { type: String }

  },
  { timestamps: true }
);

const leavePost = mongoose.model("leavePost", leavepostSchema);
module.exports = leavePost;
