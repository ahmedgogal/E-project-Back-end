const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Coupon name required'],
      unique: true,
    },
    expire: {
      type: Date,
      required: [true, 'Coupon expire time required'],
    },
    discount: {
      type: Number,
      required: [true, 'Coupon discount value required'],
    },
  },
  { timestamps: true }
);

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = mongoose.model('Coupon', couponSchema);
=======
module.exports = mongoose.model('Coupon', couponSchema);
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
=======
module.exports = mongoose.model('Coupon', couponSchema);
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
