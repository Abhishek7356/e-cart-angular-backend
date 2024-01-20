const { addToCart, getCartItems, deleteCartItem, incrementQuantity, decrementQuantity } = require('../controllers/cartController');
const { getAllProducts, getOneProducts } = require('../controllers/productController');
const { register, login } = require('../controllers/userController');
const { addWishlist, getWishlist, deleteWishlist } = require('../controllers/wishListController');
const JWTMiddleware = require('../middlewares/JWTmiddleware');
const router = require('express').Router();


router.get('/products', getAllProducts)
router.get('/products/one/:id', getOneProducts)
router.post('/user/register', register)
router.post('/user/login', login)
router.post('/add/wishlist', JWTMiddleware, addWishlist)
router.get('/get/wishlist', JWTMiddleware, getWishlist)
router.delete('/delete/wishlist/:id', JWTMiddleware, deleteWishlist)
router.get('/get/cart', JWTMiddleware, getCartItems)
router.post('/add/cart', JWTMiddleware, addToCart)
router.delete('/delete/cart/:id', JWTMiddleware, deleteCartItem)
router.put('/cart/increment/:id', incrementQuantity)
router.put('/cart/decrement/:id', decrementQuantity)


module.exports = router;
