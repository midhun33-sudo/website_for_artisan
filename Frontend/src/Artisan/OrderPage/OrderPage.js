import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import OrderList from './OrderList';
import OrderFilters from './OrderFilters';
import './OrderPage.css';
import ArtisanNavbar from '../../components/NavBar/ArtisanNavbar';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  useEffect(() => {
    // Mock data fetching
    const fetchedOrders = [
      { id: 1, customer: 'Rishi kanth', status: 'Pending', total: 120, date: '2024-12-01' },
      { id: 2, customer: 'Krishna samhith', status: 'Shipped', total: 50, date: '2024-12-02' },
      { id: 3, customer: 'Uday Bhaskar', status: 'Delivered', total: 200, date: '2024-12-03' },
      { id: 4, customer: 'Siva', status: 'Cancelled', total: 0, date: '2024-12-04' },
      

      // More orders...
    ];
    setOrders(fetchedOrders);
    setFilteredOrders(fetchedOrders); // Default view shows all orders
  }, []);

  const handleFilterChange = (filters) => {
    const filtered = orders.filter(order => {
      return order.status === filters.status || order.customer.includes(filters.customer);
    });
    setFilteredOrders(filtered);
  };

  return (
    <div><ArtisanNavbar />
    <div className="order-page">
      <h2>Manage Orders</h2>
      <OrderFilters onFilterChange={handleFilterChange} />
      <OrderList orders={filteredOrders} />
    </div>
    </div>
  );
};

export default OrderPage;
