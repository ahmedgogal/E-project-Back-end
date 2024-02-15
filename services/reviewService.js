const factory = require('./handlersFactory');
const Review = require('../models/reviewModel');

// Nested route
// GET /api/v1/products/:productId/reviews
exports.createFilterObj = (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD
  let filterObject = {};
  if (req.params.productId) filterObject = { product: req.params.productId };
  req.filterObj = filterObject;
  next();
};

// @desc    Get list of reviews
// @route   GET /api/v1/reviews
=======
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
    let filterObject = {};
    if (req.params.productId) filterObject = { product: req.params.productId };
    req.filterObj = filterObject;
    next();
  };

// @desc    Get list of Reviewss
// @route   GET /api/v1/Review
<<<<<<< HEAD
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
// @access  Public
exports.getReviews = factory.getAll(Review);

// @desc    Get specific review by id
// @route   GET /api/v1/reviews/:id
// @access  Public
exports.getReview = factory.getOne(Review);

// Nested route (Create)
exports.setProductIdAndUserIdToBody = (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user._id;
  next();
};
=======
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
    if (!req.body.product) req.body.product = req.params.productId;
    if (!req.body.user) req.body.user = req.user._id;
    next();
  };
  
<<<<<<< HEAD
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
// @desc    Create review
// @route   POST  /api/v1/reviews
// @access  Private/Protect/User
exports.createReview = factory.createOne(Review);

// @desc    Update specific review
// @route   PUT /api/v1/reviews/:id
// @access  Private/Protect/User
exports.updateReview = factory.updateOne(Review);

// @desc    Delete specific review
// @route   DELETE /api/v1/reviews/:id
// @access  Private/Protect/User-Admin-Manager
exports.deleteReview = factory.deleteOne(Review);