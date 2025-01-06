import React, { useState } from 'react';
import './AddEventForm.css';

const AddEventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [description, setDescription] = useState('');
  const [bannerImage, setBannerImage] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!eventName || !eventDate || !description) {
      alert('Please fill all fields.');
      return;
    }

    // Process form data
    const eventData = {
      eventName,
      eventDate,
      description,
      bannerImage,
    };

    console.log('Event Data:', eventData);
    alert('Event created successfully!');

    // Clear form
    setEventName('');
    setEventDate('');
    setDescription('');
    setBannerImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setBannerImage(file);
  };

  return (
    <div className="add-event-form-container">
      <h1>Create a New Event</h1>
      <form className="add-event-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter event name"
          />
        </div>
        <div className="form-group">
          <label>Event Date</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter event description"
          />
        </div>
        <div className="form-group">
          <label>Banner Image (Optional)</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <button type="submit" className="submit-btn">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default AddEventForm;
