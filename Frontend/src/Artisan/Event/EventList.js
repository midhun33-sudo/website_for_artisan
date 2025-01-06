import React, { useEffect, useState } from 'react';
import EventCard from './EventCard';
import { Link } from 'react-router-dom';
import './EventList.css';
import ArtisanNavbar from '../../components/NavBar/ArtisanNavbar';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
  
    fetchEvents();
  }, []);
  

  return (
    <div>
    <ArtisanNavbar />
    <div className="event-list">
      <h1>Upcoming Events</h1>
      <div className="header">
        <Link to="/events/add">
          <button className="add-event-button">Create New Event</button>
        </Link>
      </div>
      <div className="event-cards-container">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p>No events available. Please create one!</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default EventList;
