const LeaveRequest = require("../model/Leave");

exports.submitLeaveRequest = async (req, res) => {
  try {
    const { startDate, endDate, reason } = req.body;
    const userId = req.user.id; // Extract user ID from authMiddleware

    if (!startDate || !endDate || !reason) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newLeave = new LeaveRequest({ userId, startDate, endDate, reason });
    await newLeave.save();

    res.status(201).json({ message: "Leave request submitted successfully!" });
  } catch (error) {
    console.error("Error submitting leave request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
