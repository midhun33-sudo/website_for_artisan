// routes/orders.js

const express = require("express");
const router = express.Router();
const Order = require("../models/Order"); // Adjust the path as per your file structure

// GET route to fetch orders by customer ID
router.put("/", async (req, res) => {
  try {
    const { status, newStatus } = req.body;  // Example: Updating orders by status
    const updatedOrders = await Order.updateMany({ status: status }, { $set: { status: newStatus } });
    res.json({ updatedOrders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update orders" });
  }
});

  

module.exports = router;
