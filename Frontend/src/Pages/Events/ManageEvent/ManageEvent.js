import React, { useState } from 'react';
import './ManageEvent.css';

const ManageEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    title: "Festival Handloom Extravaganza",
    description: "Explore exquisite handwoven products crafted by skilled artisans.",
    date: "December 15, 2024",
    location: "Craft Arena, Bangalore",
    featuredProducts: [
      { id: 1, name: "Silk Saree", price: 5000 },
      { id: 2, name: "Handwoven Carpet", price: 8000 },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleRemoveProduct = (id) => {
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      featuredProducts: prevDetails.featuredProducts.filter((product) => product.id !== id),
    }));
  };

  const handleSaveChanges = () => {
    alert("Event details updated successfully!");
    // TODO: Integrate with backend to save changes
  };

  return (
    <div className="manage-event">
      <h1>Manage Event</h1>
      
      <form className="event-form">
        <label>
          Event Title:
          <input
            type="text"
            name="title"
            value={eventDetails.title}
            onChange={handleInputChange}
          />
        </label>
        
        <label>
          Description:
          <textarea
            name="description"
            value={eventDetails.description}
            onChange={handleInputChange}
          />
        </label>
        
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={handleInputChange}
          />
        </label>
        
        <label>
          Location:
          <input
            type="text"
            name="location"
            value={eventDetails.location}
            onChange={handleInputChange}
          />
        </label>
        
        <div className="featured-products">
          <h3>Featured Products</h3>
          {eventDetails.featuredProducts.map((product) => (
            <div key={product.id} className="product-item">
              <p>{product.name} - ₹{product.price}</p>
              <button onClick={() => handleRemoveProduct(product.id)}>Remove</button>
            </div>
          ))}
        </div>
        
        <button type="button" className="save-button" onClick={handleSaveChanges}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ManageEvent;
