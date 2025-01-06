import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderDetails.css";

const OrderDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  if (!order) {
    return (
      <div className="order-details-page">
        <h2>Order not found</h2>
        <button onClick={() => navigate("/orders")}>Back to Orders</button>
      </div>
    );
  }

  return (
    <div className="order-details-page">
      <h1>Order Details</h1>
      <div className="order-info">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Product Name:</strong> {order.productName}</p>
        <p><strong>Quantity:</strong> {order.quantity}</p>
        <p><strong>Total Price:</strong> ₹{order.totalPrice}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Shipping Address:</strong>2nd stage, whitefield, banglore</p>
        <p><strong>Payment Status:</strong> Paid</p>
      </div>
      <button onClick={() => navigate("/orders")}>Back to Orders</button>
    </div>
  );
};

export default OrderDetailsPage;
