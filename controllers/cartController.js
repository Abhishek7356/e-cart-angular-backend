const Cart = require('../models/cartSchema')

exports.addToCart = async (req, res) => {
    console.log("inside cart route")
    const userId = req.payload.userId
    console.log(userId)
    try {
        const existProduct = await Cart.findOne({ productId: req.body.productId })
        console.log(existProduct)
        if (existProduct) {
            existProduct.quantity += 1
            existProduct.total_price = existProduct.price * existProduct.quantity
            const addedCartItem = await Cart.updateOne({ productId: req.body.productId }, existProduct, { new: true })
            res.status(201).json(addedCartItem)
        } else {
            const newCartList = new Cart({ ...req.body, userId });
            await newCartList.save()
            console.log(newCartList)
            res.status(200).json(newCartList)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}
exports.getCartItems = async (req, res) => {
    const userId = req.payload.userId;
    try {
        const cartItems = await Cart.find({ userId })
        res.status(200).json(cartItems)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.deleteCartItem = async (req, res) => {
    console.log("inside delete path")
    console.log(req.params)
    // const userId = req.payload.userId;
    try {
        const deleteCartItem = await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted successfull")
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.incrementQuantity = async (req, res) => {
    try {
        await Cart.findByIdAndUpdate(req.params.id, { $inc: { quantity: +1, total_price: req.body.price } })
        res.status(200).json("Incremented")
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.decrementQuantity = async (req, res) => {
    try {
        await Cart.findByIdAndUpdate(req.params.id, { $inc: { quantity: -1, total_price: -req.body.price } })
        res.status(200).json("Decremented")
    } catch (err) {
        res.status(500).json(err)
    }
}