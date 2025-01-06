import React from "react";
import "./EventCard.css";

const EventCard = ({ title, description, date, image }) => {
  return (
    <div className="event-card">
      <img src={image} alt={title} className="event-card-image" />
      <div className="event-card-content">
        <h2 className="event-card-title">{title}</h2>
        <p className="event-card-description">{description}</p>
        <p className="event-card-date">Event Date: {date}</p>
        <a href="/event/event-page" className="event-card-button">
          View Details
        </a>
      </div>
    </div>
  );
};

export default EventCard;
