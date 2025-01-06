const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// POST route to handle order creation
router.post('/order', async (req, res) => {
  try {
    const { productId, productName, productPrice, customerDetails } = req.body;

    // Create a new order instance
    const newOrder = new Order({
      productId,
      productName,
      productPrice,
      customerDetails
    });

    // Save the order to the database
    await newOrder.save();

    // Send success response
    res.status(201).json({
      message: 'Order placed successfully!',
      order: newOrder
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({
      message: 'Error placing order. Please try again later.'
    });
  }
});

module.exports = router;
