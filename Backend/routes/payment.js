const express = require('express');
const stripe = require('stripe')('your-stripe-secret-key'); // Replace with your actual Stripe Secret Key
const router = express.Router();

// POST route to create a PaymentIntent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body; // Amount should be in the smallest currency unit (e.g., cents for USD)
    
    // Create a PaymentIntent with the amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // e.g., 5000 for ₹50.00
      currency: 'inr', // Set to INR for India, or use your desired currency
      payment_method_types: ['card'],
    });

    // Respond with the client secret for the payment
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
