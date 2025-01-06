import React from 'react';
import { useParams } from 'react-router-dom';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const { eventId } = useParams();

  // Sample products data for a specific event
  const products = [
    { id: 1, name: 'Handcrafted Vase', price: 1500, imageUrl: '/images/vase.jpg' },
    { id: 2, name: 'Wooden Sculpture', price: 2500, imageUrl: '/images/sculpture.jpg' },
  ];

  const handleAddToCart = (productId) => {
    alert(`Product with ID ${productId} added to cart!`);
  };

  return (
    <div className="featured-products-container">
      <h1>Featured Products for Event #{eventId}</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p><strong>Price:</strong> ₹{product.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
