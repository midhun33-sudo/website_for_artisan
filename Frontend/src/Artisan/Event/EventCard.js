import React from 'react';
import './EventCard.css';
import { useNavigate } from 'react-router-dom';

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/events/${event.id}`); // Navigates to specific EventPage
  };

  return (
    <div className="event-card">
      <img src={event.imageUrl || 'default-event.jpg'} alt={event.title} className="event-image" />
      <div className="event-info">
        <h2>{event.title}</h2>
        <p>{event.description}</p>
      </div>
      <button className="view-details-button" onClick={handleViewDetails}>
        View Details
      </button>
    </div>
  );
};

export default EventCard;
