import React, { useState } from 'react';
import './css/ArtisanDetails.css';

const ArtisanDetails = () => {
  // State for artisan details
  const [artisanDetails, setArtisanDetails] = useState({
    name: 'K.Midhun Kumar',
    email: 'midhunkumar036@gmail.com',
    contact: '9849391797',
    location: 'Banglore, India',
  });

  // State for editing mode
  const [isEditing, setIsEditing] = useState(false);

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtisanDetails((prevDetails) => ({
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
    alert('Artisan details updated successfully!');
  };

  return (
    <div className="artisan-details">
      <h2>Artisan Details</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={artisanDetails.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={artisanDetails.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Contact:</label>
            <input
              type="text"
              name="contact"
              value={artisanDetails.contact}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={artisanDetails.location}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="save-btn">Save</button>
          <button type="button" onClick={toggleEditMode} className="cancel-btn">Cancel</button>
        </form>
      ) : (
        <div className="details-view">
          <p><strong>Name:</strong> {artisanDetails.name}</p>
          <p><strong>Email:</strong> {artisanDetails.email}</p>
          <p><strong>Contact:</strong> {artisanDetails.contact}</p>
          <p><strong>Location:</strong> {artisanDetails.location}</p>
          <button onClick={toggleEditMode} className="edit-btn">Edit Details</button>
        </div>
      )}
    </div>
  );
};



export default ArtisanDetails;
