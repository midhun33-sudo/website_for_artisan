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
      { id: 1, customer: 'John Doe', status: 'Pending', total: 120, date: '2024-12-01' },
      { id: 2, customer: 'Jane Smith', status: 'Shipped', total: 50, date: '2024-12-02' },
      { id: 3, customer: 'Michael Brown', status: 'Delivered', total: 200, date: '2024-12-03' },
      { id: 4, customer: 'Emily Davis', status: 'Cancelled', total: 0, date: '2024-12-04' },
      { id: 5, customer: 'Daniel Johnson', status: 'Processing', total: 75, date: '2024-12-05' },
      { id: 6, customer: 'Sarah Wilson', status: 'Pending', total: 90, date: '2024-12-06' },
      { id: 7, customer: 'Chris Lee', status: 'Shipped', total: 300, date: '2024-12-07' },
      { id: 8, customer: 'Laura Martinez', status: 'Delivered', total: 45, date: '2024-12-08' },
      { id: 9, customer: 'Paul Hernandez', status: 'Processing', total: 150, date: '2024-12-09' },
      { id: 10, customer: 'Anna Thompson', status: 'Shipped', total: 80, date: '2024-12-10' },

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
    <div className="order-page">
      <ArtisanNavbar />
      <OrderFilters onFilterChange={handleFilterChange} />
      <OrderList orders={filteredOrders} />
    </div>
  );
};

export default OrderPage;
