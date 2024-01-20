
const Products = require('../models/productSchema');

exports.getAllProducts = async (req, res) => {
    try {
        const allProducts = await Products.find().sort({ _id: -1 });
        res.status(200).json(allProducts)
    } catch (err) {
        res.status(500).json("something went wrong", err)
    }
}

exports.getOneProducts = async (req, res) => {
    try {
        const products = await Products.findById(req.params.id);
        res.status(200).json(products)
    } catch (err) {
        res.status(500).json("something went wrong", err)
    }
}