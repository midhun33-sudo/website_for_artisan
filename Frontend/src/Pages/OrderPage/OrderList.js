
import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
import "./OrderList.css";
import CustomerNavbar from '../../components/NavBar/CustomerNavbar';

const CustomerOrderPage = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([
    { id: "ORD001", productName: "Violet sareee", quantity: 1, totalPrice: 250, status: "Pending", date: "2024-12-17" },
    { id: "ORD002", productName: "Silk Saree", quantity: 2, totalPrice: 600, status: "Shipped", date: "2024-12-16" },
  ]);

  return (
    <div>
      <CustomerNavbar/>
    <div className="customer-order-page"> 
      <h1>My Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>₹{order.totalPrice}</td>
              <td>{order.status}</td>
              <td>{order.date}</td>
              <td>
                <button
                  className="view-details-btn"
                  onClick={() => navigate("/orders-details", { state: { order } })}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};


export default CustomerOrderPage;
