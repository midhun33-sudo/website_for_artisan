import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // If using React Router for navigation
import { Link } from 'react-router-dom';
import './OrderDetails.css';

const OrderDetails = () => {
  const { orderId } = useParams();  // Get order ID from URL (for routing)
  const [order, setOrder] = useState(null);

  // Fetch order details using orderId
  useEffect(() => {
    // Simulate fetching data (replace with actual API call)
    const fetchedOrder = {
      id: orderId,
      customer: 'Rishi Kanth Reddy',
      products: [
        { id: 1, name: 'Product 1', quantity: 2, price: 1000 },
      ],
      shipping: {
        address: 'banglore, Karnataka',
        method: 'Standard Shipping',
        trackingNumber: 'A23Ruw38492',
      },
      status: 'Pending',
      payment: {
        method: 'Credit Card',
        status: 'Paid',
      },
      total: 1000,
    };
    setOrder(fetchedOrder);
  }, [orderId]);

  if (!order) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  return (
    <div>
    <div className="order-details">
    <Link to={`/order`}><button
    style={{
      backgroundColor: "#007BFF",
      color: "#fff",
      marginleft: "200px",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Back
  </button> </Link>
      <h2>Order ID: {order.id}</h2>
      
      <div className="order-section">
        <h3>Customer Information</h3>
        <p>Name: {order.customer}</p>
        <p>Address: {order.shipping.address}</p>
      </div>
      
      <div className="order-section">
        <h3>Products Ordered</h3>
        <ul>
          {order.products.map(product => (
            <li key={product.id}>
              {product.name} - Quantity: {product.quantity} - Price: ₹{product.price}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="order-section">
        <h3>Shipping Information</h3>
        <p>Shipping Method: {order.shipping.method}</p>
        <p>Tracking Number: {order.shipping.trackingNumber}</p>
      </div>
      
      <div className="order-section">
        <h3>Payment Information</h3>
        <p>Payment Method: {order.payment.method}</p>
        <p>Payment Status: {order.payment.status}</p>
      </div>
      
      <div className="order-section">
        <h3>Order Status</h3>
        <p>Status: {order.status}</p>
      </div>

      <div className="order-section">
        <h3>Total: ₹{order.total}</h3>
      </div>

      <div className="order-actions">
        <button onClick={() => alert('Order Shipped')}>Mark as Shipped</button>
        <button onClick={() => alert('Order Delivered')}>Mark as Delivered</button>
      </div>
    </div>
    </div>
  );
};

export default OrderDetails;
