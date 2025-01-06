const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// GET: Fetch all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// POST: Add a new event
router.post('/', async (req, res) => {
  const { title, description, imageUrl } = req.body;

  try {
    const newEvent = new Event({
      title,
      description,
      imageUrl,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(400).json({ message: 'Error adding event', error });
  }
});

module.exports = router;
