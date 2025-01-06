// authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Register Route (POST)
router.post('/register', async (req, res) => {
  const { username, email, password, userType } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    username,
    email,
    password: hashedPassword,
    userType,
  });

  try {
    await user.save();
    const token = jwt.sign(
      { userId: user._id, userType: user.userType }, // Include userType in the token
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.status(201).json({ token, userType: user.userType }); // Send both token and userType
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


// Login Route (POST)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password.' });
  }

  try {
    // Fetch user from the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Invalid email or password.' });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid password.' });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, userType: user.userType }, // Include userType
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send token and userType in the response
    console.log("UserType: ", user.userType);
    res.json({ token, userType: user.userType });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
});

module.exports = router;
