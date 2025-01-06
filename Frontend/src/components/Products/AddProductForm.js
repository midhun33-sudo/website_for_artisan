import React, { useState } from "react";
import "./AddProductForm.css";

const AddProductForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ name: "", price: "", stock: "", image: "" });
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
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
      <button type="submit" className="submit-btn">Add Product</button>
    </form>
  );
};

export default AddProductForm;
