import React, { useState } from 'react';
import './css/CustomerDetails.css';

const CustomerDetails = () => {
  // State for Customer details
  const [CustomerDetails, setCustomerDetails] = useState({
    name: 'Narasimha rao',
    email: 'narasimha123@example.com',
    contact: '9835235652',
    location: 'Andhra Pradesh, India',
  });

  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Handler for toggling edit mode
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  // Handler for submitting updated details
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    alert('Customer details updated successfully!');
  };

  return (
    <div className="customer-details">
      <h2>Customer Details</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={CustomerDetails.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={CustomerDetails.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input
              type="text"
              name="contact"
              value={CustomerDetails.contact}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={CustomerDetails.location}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="save-btn">Save</button>
          <button type="button" onClick={toggleEditMode} className="cancel-btn">Cancel</button>
        </form>
      ) : (
        <div className="details-view">
          <p><strong>Name:</strong> {CustomerDetails.name}</p>
          <p><strong>Email:</strong> {CustomerDetails.email}</p>
          <p><strong>Contact:</strong> {CustomerDetails.contact}</p>
          <p><strong>Location:</strong> {CustomerDetails.location}</p>
          <button onClick={toggleEditMode} className="edit-btn">Edit Details</button>
        </div>
      )}
    </div>
  );
};



export default CustomerDetails;
