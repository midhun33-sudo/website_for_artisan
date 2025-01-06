import React, { useState, useEffect } from "react";
import "./EditProductForm.css";

const EditProductForm = ({ product, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price,
        stock: product.stock,
        image: product.image,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(product.id, formData);
  };

  return (
    <form className="edit-product-form" onSubmit={handleSubmit}>
      <h2>Edit Product</h2>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock Quantity"
        value={formData.stock}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <div className="form-actions">
        <button type="submit" className="update-btn">Update Product</button>
        <button type="button" onClick={onCancel} className="cancel-btn">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;
