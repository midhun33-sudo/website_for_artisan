import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./EventPage.css";

const EventPage = () => {
  const { eventId } = useParams();

  // Inside EventPage component
  const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    navigate(`/products/${productId}`);
  };
  // Mock data for now
  const eventDetails = {
    id: eventId,
    title: "Handloom Fest",
    description:
      "Explore a variety of handmade crafts and products created by skilled artisans. This event features unique items, live demonstrations, and more.",
    date: "2024-12-20",
    image:
      "https://static.vecteezy.com/system/resources/previews/015/369/849/original/food-market-wooden-stalls-traditional-marketplace-free-vector.jpg",
    
      featuredProducts: [
      {
        id: 1,
        name: "Handwoven Scarf",
        price: "₹2500",
        image: "https://theartisanstore.com.au/wp-content/uploads/2021/04/rust-handwoven-scarf-1.jpg",
      },
      {
        id: 2,
        name: "White Saree",
        price: "₹2500",
        image: "https://yourstore.io/api/uploads/5d30013a5c83a702392c4c8b/products/1675077386294-569650.jpg",
      },
      {
        id: 3,
        name: "White Saree",
        price: "₹2000",
        image: "https://images.jdmagicbox.com/quickquotes/images_main/semi-soft-silk-pattu-saree-pattu-border-saree-2-378530579-jvodt.jpg",
      },
      {
        id: 4,
        name: "White Saree",
        price: "₹4000",
        image: "https://i.pinimg.com/originals/81/90/f8/8190f8aa6affcd9d082bf7dbf701f596.jpg",
      },
      {
        id: 5,
        name: "White Saree",
        price: "₹4500",
        image: "https://th.bing.com/th/id/OIP.F1Fj_HTm7n7pugwdVAm9DAHaHa?rs=1&pid=ImgDetMain",
      },
      {
        id: 6,
        name: "White Saree",
        price: "₹4000",
        image: "https://5.imimg.com/data5/ANDROID/Default/2022/1/TI/WK/IR/145701428/img-20220126-wa0062-jpg-500x500.jpg",
      },
      {
        id: 7,
        name: "White Saree",
        price: "₹4700",
        image: "https://5.imimg.com/data5/CU/WA/WA/SELLER-10377457/kuppadam-pattu-silk-saree-500x500.jpg",
      },
      {
        id: 8,
        name: "White Saree",
        price: "₹5000",
        image: "https://anyaonline.in/cdn/shop/files/1_75b43a5c-ed04-4dcd-8063-bb35faf18cf2_400x.jpg?v=1688195702",
      },
      {
        id: 9,
        name: "White Saree",
        price: "₹4500",
        image: "https://yourstore.io/api/uploads/607a6edd0e7a3b69278c05ea/products/1629896792425-619215.jpg",
      },
      {
        id: 10,
        name: "White Saree",
        price: "₹3000",
        image: "https://i.pinimg.com/originals/c5/a2/9c/c5a29c8bde29198914a6732ba1879d0e.jpg",
      },

    ],
  };
  

  return (
    <div className="event-page">
      <Link to="/event"><button>back</button></Link>
      <img src={eventDetails.image} alt={eventDetails.title} className="event-image" />
      <h1 className="event-title">{eventDetails.title}</h1>
      <p className="event-description">{eventDetails.description}</p>
      <p className="event-date">Date: {eventDetails.date}</p>
      
      <h2 className="featured-products-title">Featured Products</h2>
      <div className="featured-products">
        {eventDetails.featuredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button
              className="buy-button"
              onClick={() => handleBuyNow(product.id)}
            >
              Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
