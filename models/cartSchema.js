const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    userId: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    total_price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("cart", cartSchema);