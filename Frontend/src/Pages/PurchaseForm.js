import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./PurchaseForm.css";

// Replace with your Stripe publishable key
const stripePromise = loadStripe("your-publishable-key");

const PurchaseForm = ({ productId, productName, productPrice }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState(null);
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Fetch PaymentIntent client secret from the backend
    const fetchClientSecret = async () => {
      const response = await fetch("http://localhost:5000/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: productPrice * 100, // Multiply by 100 for the smallest unit (e.g., cents)
        }),
      });
      const data = await response.json();
      setClientSecret(data.clientSecret);
    };

    fetchClientSecret();
  }, [productPrice]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Confirm card payment using Stripe
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
      console.error("Error:", error);
      alert("Payment failed. Please try again.");
      setLoading(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      try {
        // Place order only if payment is successful
        const response = await fetch("http://localhost:5000/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId,
            productName,
            productPrice,
            customerDetails: formData,
            paymentStatus: paymentIntent.status,
            paymentId: paymentIntent.id,
          }),
        });

        if (response.ok) {
          alert("Order placed successfully!");
          navigate("/order-confirmation");
        } else {
          alert("Failed to place order. Try again.");
        }
      } catch (error) {
        console.error("Error placing order:", error);
        alert("Error placing order. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="purchase-form">
      <h2>Complete Your Purchase</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" value={productName}  />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="text" value={`₹${productPrice}`} disabled />
        </div>

        {/* Stripe Card Element */}
        <div className="form-group">
          <label>Payment Details</label>
          <CardElement />
        </div>

        <div className="form-group">
          <button type="submit" disabled={loading || !clientSecret}>
            {loading ? "Processing..." : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  );
};

const PurchaseFormWrapper = ({ productId, productName, productPrice }) => (
  <Elements stripe={stripePromise}>
    <PurchaseForm
      productId={productId}
      productName={productName}
      productPrice={productPrice}
    />
  </Elements>
);

export default PurchaseFormWrapper;
