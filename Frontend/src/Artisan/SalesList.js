import React, { useState, useEffect } from 'react';
import { getAllSales, addSale, deleteSale } from '../api';
import './SalesList.css';


const SalesList = () => {
    const [sales, setSales] = useState([]);
    const [error, setError] = useState(null);

    // Fetch sales on component mount
    useEffect(() => {
        const fetchSales = async () => {
            try {
                const data = await getAllSales();
                setSales(data);
            } catch (err) {
                setError('Failed to fetch sales');
            }
        };
        fetchSales();
    }, []);

    // Add a new sale (example use case)
    const handleAddSale = async () => {
        const newSale = {
            product: '60f7e6f5d7c5b14c2e9f45c1', // Replace with actual product ID
            customer: '60f7e812d7c5b14c2e9f45c3', // Replace with actual customer ID
            quantity: 2,
            totalAmount: 500,
        };
        try {
            const addedSale = await addSale(newSale);
            setSales([...sales, addedSale]);
        } catch (err) {
            setError('Failed to add sale');
        }
    };

    // Delete a sale
    const handleDeleteSale = async (id) => {
        try {
            await deleteSale(id);
            setSales(sales.filter((sale) => sale._id !== id));
        } catch (err) {
            setError('Failed to delete sale');
        }
    };

    return (
        <div className="sales-container">
            <h1>Sales</h1>
            {error && <p>{error}</p>}
            <button onClick={handleAddSale}>Add Sale</button>
            <ul>
                {sales.map((sale) => (
                    <li key={sale._id}>
                        <span>{sale.product.name} - {sale.quantity} units - ₹{sale.totalAmount}</span>
                        <button onClick={() => handleDeleteSale(sale._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
    
};

export default SalesList;
