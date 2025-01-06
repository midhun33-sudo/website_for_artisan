import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key'); // Replace with your actual Publishable Key

const PaymentForm = ({ amount }) => {
  const [clientSecret, setClientSecret] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  // Fetch the PaymentIntent client secret from the backend
  useEffect(() => {
    const fetchClientSecret = async () => {
      const response = await fetch('http://localhost:5000/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }), // Send the amount to the backend
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    };

    fetchClientSecret();
  }, [amount]);

  // Handle payment submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return; // Stripe.js has not loaded yet
    }

    const card = elements.getElement(CardElement);
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
      },
    });

    if (error) {
      console.error('Error:', error);
      alert('Payment failed');
    } else {
      if (paymentIntent.status === 'succeeded') {
        alert('Payment successful!');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay ₹{amount / 100}
      </button>
    </form>
  );
};

const PaymentWrapper = ({ amount }) => (
  <Elements stripe={stripePromise}>
    <PaymentForm amount={amount} />
  </Elements>
);

export default PaymentWrapper;
