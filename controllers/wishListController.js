
const Wishlist = require('../models/wishListSchema');

exports.addWishlist = async (req, res) => {
    console.log("inside wishlist route")
    const userId = req.payload.userId
    console.log(userId)
    try {
        const existProduct = await Wishlist.findOne({ productId: req.body.productId })
        console.log(existProduct)
        if (existProduct) {
            res.status(501).json("Product allreadt exist in your wishlist")
        } else {
            const newWishList = new Wishlist({ ...req.body, userId });
            await newWishList.save()
            console.log(newWishList)
            res.status(200).json(newWishList)
        }
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getWishlist = async (req, res) => {
    const userId = req.payload.userId;
    try {
        const wishList = await Wishlist.find({ userId })
        res.status(200).json(wishList)
    } catch (err) {
        res.status(500).json(err)
    }
}
exports.deleteWishlist = async (req, res) => {
    console.log("inside delete path")
    console.log(req.params)
    // const userId = req.payload.userId;
    try {
        const deleteWishList = await Wishlist.findByIdAndDelete(req.params.id)
        res.status(200).json("Product deleted successfull")
    } catch (err) {
        res.status(500).json(err)
    }
}