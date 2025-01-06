import React from "react";
import { Link } from "react-router-dom";
import './WelcomePage.css';

const WelcomePage = () => {
 {/* const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
    };
  */}
  return (
    <div className="container">
      <div className="intro-section">
        <h1 className="title">Welcome To HandLoom HUB!</h1>
        <p className="description">
          A hub for artisans to showcase their handloom products and for
          customers to purchase unique handmade fabric creations.
        </p>
        <div className="button-group">
          <Link to="/login">
            <button className="button">Login</button>
          </Link>
          <Link to="/register">
            <button className="button">Register</button>
          </Link>
        </div>
      </div>

      <div className="section">
        <h2>Artisans Showcase</h2>
        <p>Discover the finest handloom creations from artisans worldwide.</p>
      </div>

      <div className="section">
        <h2>Browse Events</h2>
        <p>Explore special events where artisans present limited edition handloom products.</p>
      </div>
    </div>
  );
};

export default WelcomePage;