const mongoose = require('mongoose');

const wishlistsSchema = new mongoose.Schema({
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
    }
});

module.exports = mongoose.model("wishlists", wishlistsSchema);