const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale');
const Product = require('../models/Product');

// @route POST /api/sales
// @desc Add a new sale
router.post('/', async (req, res) => {
    try {
        const { product, customer, quantity, totalAmount } = req.body;

        if (!product || !customer || !quantity || !totalAmount) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newSale = new Sale({
            product,
            customer,
            quantity,
            totalAmount,
        });

        const savedSale = await newSale.save();
        res.status(201).json(savedSale);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

// @route GET /api/sales
// @desc Get all sales
router.get('/', async (req, res) => {
    try {
        const sales = await Sale.find()
            .populate('product', 'name price') // Populate product details
            .populate('customer', 'name email'); // Populate customer details
        res.status(200).json(sales);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

// @route PUT /api/sales/:id
// @desc Update a sale
router.put('/:id', async (req, res) => {
    try {
        const { quantity, totalAmount } = req.body;

        const updatedSale = await Sale.findByIdAndUpdate(
            req.params.id,
            { quantity, totalAmount },
            { new: true, runValidators: true }
        );

        if (!updatedSale) {
            return res.status(404).json({ error: 'Sale not found' });
        }

        res.status(200).json(updatedSale);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

// @route DELETE /api/sales/:id
// @desc Delete a sale
router.delete('/:id', async (req, res) => {
    try {
        const sale = await Sale.findByIdAndDelete(req.params.id);

        if (!sale) {
            return res.status(404).json({ error: 'Sale not found' });
        }

        res.status(200).json({ message: 'Sale deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

module.exports = router;
