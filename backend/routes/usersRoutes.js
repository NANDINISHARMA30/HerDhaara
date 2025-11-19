const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create User
router.post("/", async (req, res) => {
  try {
    const { fullName, mobileNumber } = req.body;

    if (!fullName || !mobileNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ mobileNumber });
    if (existingUser) {
      return res.status(400).json({ message: "Mobile number already registered" });
    }

    const user = new User({ fullName, mobileNumber });
    await user.save();

    res.status(201).json({ message: "User created successfully", user });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all users (optional)
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
