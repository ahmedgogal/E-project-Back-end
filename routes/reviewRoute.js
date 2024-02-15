const express = require('express');
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
// const {
//   getBrandValidator,
//   createBrandValidator,
//   updateBrandValidator,
//   deleteBrandValidator,
// } = require('../utils/validators/brandValidator');
<<<<<<< HEAD
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f

const {
  createReviewValidator,
  updateReviewValidator,
  getReviewValidator,
  deleteReviewValidator,
} = require('../utils/validators/reviewValidator');

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
=======

>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
const {
  getReview,
  getReviews,
  createReview,
  updateReview,
  deleteReview,
  createFilterObj,
  setProductIdAndUserIdToBody,
} = require('../services/reviewService');

const authService = require('../services/authService');

const router = express.Router({ mergeParams: true });

router
  .route('/')
<<<<<<< HEAD
<<<<<<< HEAD
  .get(createFilterObj, getReviews)
  .post(
    authService.protect,
    authService.allowedTo('user'),
    setProductIdAndUserIdToBody,
    createReviewValidator,
    createReview
  );
router
  .route('/:id')
  .get(getReviewValidator, getReview)
  .put(
    authService.protect,
    authService.allowedTo('user'),
    updateReviewValidator,
    updateReview
  )
  .delete(
    authService.protect,
    authService.allowedTo('user', 'manager', 'admin'),
    deleteReviewValidator,
    deleteReview
  );
=======
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
    .get(createFilterObj, getReviews)
    .post(authService.protect, authService.allowedTo('user'), setProductIdAndUserIdToBody, createReviewValidator, createReview);


router
  .route('/:id')
  .get(getReviewValidator,getReview)
  .put(authService.protect, authService.allowedTo('user'), updateReviewValidator, updateReview)
  .delete(authService.protect, authService.allowedTo('user','manager','admin'), deleteReviewValidator, deleteReview);
<<<<<<< HEAD
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f

module.exports = router;