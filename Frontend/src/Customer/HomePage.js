import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';  // Link to your CSS file
import ArtisanNavbar from '../components/NavBar/ArtisanNavbar';

function HomePage() {
  return (
    <div className="home-page">

        <ArtisanNavbar />        
      {/* Header Section */}
      <header>
        <h1>Welcome Customers! To There Vision Of Creativity</h1>
      </header>
      

      {/* Cartoon Handloom Image */}
      <div className="image-section">
        <img src="https://cdn1.byjus.com/wp-content/uploads/blog/2023/08/07155346/Handloom-Day_banner.jpg" alt="Handloom" className="handloom-image" />
      </div>

      
      <div className="home-container">
      

      {/* Banner Section for Events */}
      <div className="section-banner events-banner">
        <div className="banner-content">
          <h2>Craft Events</h2>
          <p>"Join us for exciting craft events, showcasing the finest creations from artisans."</p>
          <button className="cta-button" onclick="/cust-sales">View Events</button>
        </div>
      </div>

      {/* Banner Section for Orders */}
      <div className="section-banner orders-banner">
        <div className="banner-content">
          <h2>Your Orders</h2>
          <p>"Track your orders easily, and enjoy a seamless shopping experience."</p>
          <button className="cta-button">View Orders</button>
        </div>
      </div>

      {/* Banner Section for Sales */}
      <div className="section-banner sales-banner">
        <div className="banner-content">
          <h2>Sales Dashboard</h2>
          <p>"Keep track of your sales and monitor performance with detailed analytics."</p>
          <button className="cta-button">View Sales</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomePage;
