import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Mock data
  const product = {
    id: productId,
    name: "Handwoven Scarf",
    price: "₹2500",
    description: "A beautifully crafted handwoven scarf made with organic materials.",
    image: "https://theartisanstore.com.au/wp-content/uploads/2021/04/rust-handwoven-scarf-1-750x750.jpg",
  };

  const proceedToBuy = () => {
    navigate(`/buy/${product.id}`);
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1 className="product-title">{product.name}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price}</p>
      <button className="proceed-button" onClick={proceedToBuy}>
        Proceed to Buy
      </button>
    </div>
  );
};

export default ProductDetails;
