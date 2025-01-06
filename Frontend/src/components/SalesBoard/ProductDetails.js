import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Dummy data for product details (Replace with real data from backend/API later)
  const products = {

      
      1: { 
        name: "Product A", 
        price: "₹500", 
        description: "Beautiful handloom cotton saree, soft and breathable fabric perfect for summer wear.", 
        image: "https://i.pinimg.com/originals/e4/37/a5/e437a5a8f16d6658763795fa381592ab.jpg" 
      },
      2: { 
        name: "Product B", 
        price: "₹3000", 
        description: "Elegant handloom silk saree with intricate weaving and vibrant design for special occasions.", 
        image: "https://i.pinimg.com/564x/1f/28/bb/1f28bb99c301b7c8aa5e3b774c91fd71.jpg" 
      },
      3: { 
        name: "Product C", 
        price: "₹4000", 
        description: "Premium designer saree with rich textures and traditional craftsmanship.", 
        image: "https://i.pinimg.com/564x/2a/3b/4c/2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p.jpg" 
      },
      4: { 
        name: "Product E", 
        price: "₹770", 
        description: "Lightweight cotton saree with colorful patterns, perfect for daily wear.", 
        image: "https://i.pinimg.com/564x/3b/4c/5d/3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q.jpg" 
      },
      5: { 
        name: "Product E", 
        price: "₹2550", 
        description: "Vibrant handwoven saree featuring stunning ethnic motifs and soft fabric.", 
        image: "https://i.pinimg.com/564x/4c/5d/6e/4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r.jpg" 
      },
      6: { 
        name: "Product D", 
        price: "₹1500", 
        description: "Graceful saree with minimalistic design, perfect for casual and formal occasions.", 
        image: "https://i.pinimg.com/564x/5d/6e/7f/5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s.jpg" 
      },
      7: { 
        name: "Product E", 
        price: "₹2500", 
        description: "Handloom saree crafted with high-quality yarn and traditional weaving techniques.", 
        image: "https://i.pinimg.com/564x/6e/7f/8g/6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t.jpg" 
      },
      8: { 
        name: "Product E", 
        price: "₹2000", 
        description: "Soft and lightweight saree with vibrant colors and beautiful drape.", 
        image: "https://i.pinimg.com/564x/7f/8g/9h/7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u.jpg" 
      },
      9: { 
        name: "Product E", 
        price: "₹2500", 
        description: "Elegant saree with floral patterns and premium texture for festive occasions.", 
        image: "https://i.pinimg.com/564x/8g/9h/0i/8g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v.jpg" 
      },
      10: { 
        name: "Product E", 
        price: "₹1000", 
        description: "Budget-friendly saree with delicate prints and soft fabric.", 
        image: "https://i.pinimg.com/564x/9h/0i/1j/9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w.jpg" 
      },
      11: { 
        name: "Product F", 
        price: "₹1800", 
        description: "Comfortable cotton saree with unique designs for everyday use.", 
        image: "https://i.pinimg.com/564x/0i/1j/2k/0i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x.jpg" 
      },
      12: { 
        name: "Product G", 
        price: "₹2200", 
        description: "Stylish saree with fine craftsmanship and elegant embroidery details.", 
        image: "https://i.pinimg.com/564x/1j/2k/3l/1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y.jpg" 
      },
      13: { 
        name: "Product E", 
        price: "₹2500", 
        description: "Handcrafted saree made with precision, perfect for traditional events.", 
        image: "https://i.pinimg.com/564x/2k/3l/4m/2k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z.jpg" 
      },
      14: { 
        name: "Product E", 
        price: "₹2700", 
        description: "Classic saree with rich tones and timeless patterns for festive wear.", 
        image: "https://i.pinimg.com/564x/3l/4m/5n/3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a.jpg" 
      },
      15: { 
        name: "Product E", 
        price: "₹2000", 
        description: "Soft handwoven saree with intricate designs, offering elegance and comfort.", 
        image: "https://i.pinimg.com/564x/4m/5n/6o/4m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b.jpg" 
      },
    
  };

  const product = products[productId];

  if (!product) {
    return (
      <div style={{ padding: "20px" }}>
        <p>Product not found.</p>
      </div>
    );
  }
  const proceedToBuy = () => {
    navigate(`/buy/${product.id}`);
  };

  return (
    <div className="product-details">
      <div className="product-photo">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">Price: {product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <button 
        className="buy-now-btn" 
        onClick={() => proceedToBuy(product.id)}>
          Buy Now
          </button>
      </div>
    </div>
  );
};

export default ProductDetails;

