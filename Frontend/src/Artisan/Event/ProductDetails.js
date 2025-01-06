import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";// Assuming you're using React Router
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams(); // Extract product ID from URL
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${id}`);
                setProduct(response.data);
            } catch (err) {
                console.error('Error fetching product details:', err);
            }
        };
        fetchProduct();
    }, [id]);

    const proceedToBuy = () => {
        navigate(`/buy/${product.id}`);
      };

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-details">
        <img src={product.image} alt={product.name} className="product-image" />
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}</p>
        <p className="product-description">Stock: {product.stock}</p>
        <button className="proceed-button" onClick={proceedToBuy}>
          Proceed to Buy
        </button>
      </div>
    );
};

export default ProductDetails;
