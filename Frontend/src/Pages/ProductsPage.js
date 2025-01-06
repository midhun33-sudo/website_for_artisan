import React, { useState } from "react";
//import SideBar from "../components/SideBar/SideBar";
import ProductList from "../components/Products/ProductList";
import AddProductForm from "../components/Products/AddProductForm";
import EditProductForm from "../components/Products/EditProductForm";
import "./ProductsPage.css";

const ProductsPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Handcrafted Vase", price: 250, stock: 15, image: "" },
    { id: 2, name: "Wooden Chair", price: 750, stock: 5, image: "" },
  ]);

  const [view, setView] = useState("list"); // Possible views: 'list', 'add', 'edit'
  const [productToEdit, setProductToEdit] = useState(null);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { id: Date.now(), ...newProduct }]);
    setView("list");
  };

  const handleEditProduct = (id, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
    setView("list");
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleEditClick = (product) => {
    setProductToEdit(product);
    setView("edit");
  };

  return (
    <div className="products-page">
      <div className="products-layout">
        
        <div className="products-content">
          <h1>Products</h1>
          {view === "list" && (
            <>
              <button className="add-btn" onClick={() => setView("add")}>
                Add Product
              </button>
              <ProductList
                products={products}
                onEdit={handleEditClick}
                onDelete={handleDeleteProduct}
              />
            </>
          )}
          {view === "add" && (
            <AddProductForm
              onAdd={handleAddProduct}
              onCancel={() => setView("list")}
            />
          )}
          {view === "edit" && productToEdit && (
            <EditProductForm
              product={productToEdit}
              onUpdate={handleEditProduct}
              onCancel={() => setView("list")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
