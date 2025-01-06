import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const CustomerNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>ArtisanApp</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/home-cust">Home</Link></li>
        <li><Link to="/cust-sales">Products</Link></li>
        <li><Link to="/event">Events</Link></li>
        <li><Link to="/orders">My Orders</Link></li>
        <li className="dropdown">
          <span>Dashboard</span>
          <ul className="dropdown-menu">
            <li><Link to="/customer-dashboard">Profile</Link></li>
            <li><span onClick={handleLogout} className="logout-link">Logout</span></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default CustomerNavbar;
