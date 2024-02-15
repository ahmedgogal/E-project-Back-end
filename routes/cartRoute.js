const express = require('express');

const {
  addProductToCart,
  getLoggedUserCart,
  removeSpecificCartItem,
  clearCart,
  updateCartItemQuantity,
  applyCoupon,
} = require('../services/cartService');
const authService = require('../services/authService');

const router = express.Router();

router.use(authService.protect, authService.allowedTo('user'));
router
  .route('/')
  .post(addProductToCart)
  .get(getLoggedUserCart)
  .delete(clearCart);

router.put('/applyCoupon', applyCoupon);

router
  .route('/:itemId')
  .put(updateCartItemQuantity)
  .delete(removeSpecificCartItem);

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
=======
module.exports = router;
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
