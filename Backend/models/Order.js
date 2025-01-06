const mongoose = require('mongoose');

// Define the schema for the order
const orderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  productName: { type: String, required: true },
  productPrice: { type: Number, required: true },
  customerDetails: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    phone: { type: String, required: true }
  },
  status: { type: String, default: 'Pending' },  // Order status
  createdAt: { type: Date, default: Date.now }
});

// Create the model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
