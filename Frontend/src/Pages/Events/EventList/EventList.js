import React from "react";
import EventCard from "../../../components/EventCard/EventCard";
import "./EventList.css";
import CustomerNavbar from "../../../components/NavBar/CustomerNavbar";

const EventList = () => {
  const events = [
    {
      id: 1,
      title: "Handloom Fest 2024",
      description: "A showcase of traditional handloom products.",
      date: "2024-12-20",
      image: "https://www.khaskhabar.com/s3-storage/khaskhabar/khaskhabarimages/img500/handloom011-27-1551876067-372454-khaskhabar.jpg",
    },
    {
      id: 2,
      title: "Crafts Carnival",
      description: "Explore handcrafted items from local artisans.",
      date: "2024-12-25",
      image: "https://th.bing.com/th/id/OIP.d-bzKWiezZWXEPTyQxvGiwHaDt?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div>
      <CustomerNavbar />    
      <div className="event-list">
        <h1 className="event-list-title">Upcoming Events</h1>
        <div className="event-cards">
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              image={event.image}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default EventList;
