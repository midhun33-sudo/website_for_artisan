import React, { useState } from 'react';
import './OrderFilters.css';

const OrderFilters = ({ onFilterChange }) => {
  const [status, setStatus] = useState('');
  const [customer, setCustomer] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ status, customer });
  };

  return (
    <div className="order-filters">
      <input
        type="text"
        placeholder="Search by Customer"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Statuses</option>
        <option value="Pending">Pending</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
      </select>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default OrderFilters;
