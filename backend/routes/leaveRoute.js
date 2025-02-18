const express = require("express");
const Leave = require("../model/Leave");

const router = express.Router();

// Submit Leave Request
router.post("/", async (req, res) => {
  try {
    const newLeave = new Leave(req.body);
    await newLeave.save();
    res.status(201).json({ message: "Leave request submitted successfully" });
  } catch (error) {
    console.error("Error submitting leave request:", error);
    res.status(500).json({ error: "Error submitting leave request" });
  }
});

// Get All Leave Requests (Optional)
router.get("/", async (req, res) => {
  try {
    const leaves = await Leave.find();
    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({ error: "Error fetching leave requests" });
  }
});

module.exports = router;
