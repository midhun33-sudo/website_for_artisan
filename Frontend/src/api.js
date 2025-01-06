import axios from 'axios';

// Base URL for your backend
const API_BASE_URL = 'http://localhost:5000/api';

// Axios instance
const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Fetch all sales
export const getAllSales = async () => {
    try {
        const response = await apiClient.get('/sales');
        return response.data;
    } catch (error) {
        console.error('Error fetching sales:', error);
        throw error;
    }
};

// Add a new sale
export const addSale = async (saleData) => {
    try {
        const response = await apiClient.post('/sales', saleData);
        return response.data;
    } catch (error) {
        console.error('Error adding sale:', error);
        throw error;
    }
};

// Update a sale
export const updateSale = async (id, updatedData) => {
    try {
        const response = await apiClient.put(`/sales/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Error updating sale:', error);
        throw error;
    }
};

// Delete a sale
export const deleteSale = async (id) => {
    try {
        const response = await apiClient.delete(`/sales/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting sale:', error);
        throw error;
    }
};
