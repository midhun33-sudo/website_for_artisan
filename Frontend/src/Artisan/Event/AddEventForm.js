import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddEventForm.css';

const AddEventForm = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventImageUrl, setEventImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the event data to be sent as JSON
    const eventData = {
      title: eventTitle,
      description: eventDescription,
      imageUrl: eventImageUrl, // Directly use the image URL input
    };

    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        console.log('Event created successfully');
        navigate('/events'); // Redirect back to event list
      } else {
        console.error('Failed to add event');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="add-event-form">
      <h1>Add New Event</h1>
      <form onSubmit={handleSubmit}>
        <label>Event Title</label>
        <input
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
          placeholder="Enter event title"
          required
        />

        <label>Event Description</label>
        <textarea
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
          placeholder="Enter event description"
          required
        />

        <label>Event Image URL</label>
        <input
          type="url"
          value={eventImageUrl}
          onChange={(e) => setEventImageUrl(e.target.value)}
          placeholder="Enter image URL"
          required
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default AddEventForm;
