const express = require('express');

const {
  getCoupon,
  getCoupons,
  createCoupon,
  updateCoupon,
  deleteCoupon,
} = require('../services/couponService');

const authService = require('../services/authService');

const router = express.Router();

router.use(authService.protect, authService.allowedTo('admin', 'manager'));

router.route('/').get(getCoupons).post(createCoupon);
router.route('/:id').get(getCoupon).put(updateCoupon).delete(deleteCoupon);

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
=======
module.exports = router;
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
