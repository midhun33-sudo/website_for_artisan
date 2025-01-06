import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import './OrderList.css';

const OrderList = ({ orders }) => {
  return (
    <div className="order-list">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Status</th>
            <th>Total</th>
            <th>Order Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.status}</td>
              <td>{order.total}</td>
              <td>{order.date}</td>
              <td>
                <Link to={`/order/${order.id}`}>
                  <button>View Order</button>
                </Link>
                  <button onClick={() => console.log('Update Order Status', order.id)}>Update Status</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
