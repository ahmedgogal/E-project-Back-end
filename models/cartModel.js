const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema(
  {
    cartItems: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: 'Product',
        },
        quantity: {
          type: Number,
          default: 1,
        },
        color: String,
        price: Number,
      },
    ],
    totalCartPrice: Number,
    totalPriceAfterDiscount: Number,
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

<<<<<<< HEAD
module.exports = mongoose.model('Cart', cartSchema);
=======
module.exports = mongoose.model('Cart', cartSchema);
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
