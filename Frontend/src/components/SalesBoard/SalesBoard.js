import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests
import "./SalesBoard.css";

const SalesBoard = () => {
  const navigate = useNavigate();
  
  // State to store rows of products (e.g., top selling, recently sold, etc.)
  const [rows, setRows] = useState([]);

  // Fetch product data from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        const products = response.data;

        // Assuming the backend doesn't directly categorize the products, we'll group them
        const categorizedProducts = {
          topSelling: products.slice(0, 5),  // Just an example, replace with actual logic for categorizing
          recentlySold: products.slice(5, 10),  // Similarly, customize this logic
          pendingDeliveries: products.slice(10, 15) // Adjust according to your data
        };

        setRows([
          {
            title: "Top Selling Products",
            data: categorizedProducts.topSelling
          },
          {
            title: "Most Expensive",
            data: categorizedProducts.recentlySold
          },
          {
            title: "Basic And Regular",
            data: categorizedProducts.pendingDeliveries
          }
        ]);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Navigate to the product details page
  const handleBuyClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="sales-board">
      {rows.map((row, index) => (
        <div key={index} className="sales-row">
          <h2 className="row-title">{row.title}</h2>
          <div className="row-products">
            {row.data.map((product) => (
              <div key={product._id} className="product-card">
                <img src={product.imageUrl} alt={product.name} className="product-image" />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">₹{product.price}</p>
                  <button
                    className="buy-button"
                    onClick={() => handleBuyClick(product._id)} // Use _id for the product
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesBoard;


