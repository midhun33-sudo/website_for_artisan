import React from "react";
import "./ProductList.css";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div className="product-list">
      <h2>Manage Your Products</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <img src={product.image} alt={product.name} className="product-image" />
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => onEdit(product)} className="edit-btn">Edit</button>
                <button onClick={() => onDelete(product.id)} className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
