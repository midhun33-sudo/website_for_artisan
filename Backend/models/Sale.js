const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalAmount: { // Change this field name
        type: Number,
        required: true,
    },
    dateOfSale: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

module.exports = mongoose.model('Sale', saleSchema);
