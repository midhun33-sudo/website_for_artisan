import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const ArtisanNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logout (clear user data, redirect, etc.)
    localStorage.removeItem('userToken'); // Example logic to clear user session
    navigate('/login'); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>ArtisanApp</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/sales-board">Sales Board</Link></li>
        <li><Link to="/product-management">Products</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/order">Orders</Link></li>
        <li className="dropdown">
          <span>Dashboard</span>
          <ul className="dropdown-menu">
            <li><Link to="/artisan-dashboard">Profile</Link></li>
            <li><span onClick={handleLogout} className="logout-link">Logout</span></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default ArtisanNavbar;

