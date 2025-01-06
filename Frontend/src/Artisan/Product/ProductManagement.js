// ProductManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductManagement.css'; // Include CSS for styling
import ArtisanNavbar from '../../components/NavBar/ArtisanNavbar';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        imageUrl: '',
    });
    const [showForm, setShowForm] = useState(false);
    const [editProduct, setEditProduct] = useState(null);

    // Fetch products from backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (err) {
                console.error('Error fetching products:', err);
            }
        };

        fetchProducts();
    }, []);

    // Add or update a product
    const handleAddOrUpdateProduct = async () => {
        try {
            if (editProduct) {
                // Update existing product
                const response = await axios.put(`http://localhost:5000/api/products/${editProduct._id}`, newProduct);
                setProducts(products.map(product => product._id === editProduct._id ? response.data : product));
                setEditProduct(null);
            } else {
                // Add new product
                const response = await axios.post('http://localhost:5000/api/products', newProduct);
                setProducts([...products, response.data]);
            }
            setNewProduct({ name: '', description: '', price: '', stock: '', imageUrl: '' });
            setShowForm(false);
        } catch (err) {
            console.error('Error adding/updating product:', err);
        }
    };

    // Delete a product
    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${id}`);
            setProducts(products.filter(product => product._id !== id));
        } catch (err) {
            console.error('Error deleting product:', err);
        }
    };

    // Start editing a product
    const handleEditProduct = (product) => {
        setEditProduct(product);
        setNewProduct({ ...product });
        setShowForm(true);
    };

    // Update the input for a new or edited product
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    return (
        <div>
            <ArtisanNavbar />
        <div className="product-management">
            <h1>Product Management</h1>

            {/* Button to Show Add Product Form */}
            <button className="add-product-button" onClick={() => {
                setShowForm(!showForm);
                setEditProduct(null);
                setNewProduct({ name: '', description: '', price: '', stock: '', imageUrl: '' });
            }}>
                {showForm ? 'Cancel' : 'Add Product'}
            </button>

            {/* Add/Edit Product Form */}
            {showForm && (
                <div className="add-product-form">
                    <h2>{editProduct ? 'Edit Product' : 'Add New Product'}</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={newProduct.name}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="description"
                        placeholder="Product Description"
                        value={newProduct.description}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="stock"
                        placeholder="Stock"
                        value={newProduct.stock}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="imageUrl"
                        placeholder="Image URL"
                        value={newProduct.imageUrl}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleAddOrUpdateProduct}>{editProduct ? 'Update Product' : 'Add Product'}</button>
                </div>
            )}

            {/* Display Products */}
            <div className="product-grid">
                {products.map(product => (
                    <div className="product-card" key={product._id}>
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-description">{product.description}</p>
                        <p className="product-price">Price: ₹{product.price}</p>
                        <p className="product-stock">Stock: {product.stock}</p>
                        <div className="product-card-actions">
                            <button onClick={() => handleEditProduct(product)} className="edit-button">Edit</button>
                            <button onClick={() => handleDeleteProduct(product._id)} className="delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default ProductManagement;
