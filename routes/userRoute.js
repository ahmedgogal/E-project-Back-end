const express = require('express');
const {
<<<<<<< HEAD
<<<<<<< HEAD
  getUserValidator,
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
  changeUserPasswordValidator,
  updateLoggedUserValidator,
} = require('../utils/validators/userValidator');

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  uploadUserImage,
  resizeImage,
  changeUserPassword,
  getLoggedUserData,
  updateLoggedUserPassword,
  updateLoggedUserData,
  deleteLoggedUserData,
=======
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
    getUserValidator,
    createUserValidator,
    updateUserValidator,
    deleteUserValidator,
    changeUserPasswordValidator,
    updateLoggedUserValidator,
} = require('../utils/validators/userValidator');

const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    uploadUserImage,
    resizeImage,
    changeUserPassword,
    getLoggedUserData,
    updateLoggedUserPassword,
    updateLoggedUserData,
    deleteLoggedUserData,
<<<<<<< HEAD
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
} = require('../services/userService');

const authService = require('../services/authService');

const router = express.Router();

router.use(authService.protect);

router.get('/getMe', getLoggedUserData, getUser);
router.put('/changeMyPassword', updateLoggedUserPassword);
router.put('/updateMe', updateLoggedUserValidator, updateLoggedUserData);
router.delete('/deleteMe', deleteLoggedUserData);

// Admin
router.use(authService.allowedTo('admin', 'manager'));
router.put(
<<<<<<< HEAD
<<<<<<< HEAD
  '/changePassword/:id',
  changeUserPasswordValidator,
  changeUserPassword
);
router
  .route('/')
  .get(getUsers)
  .post(uploadUserImage, resizeImage, createUserValidator, createUser);
router
  .route('/:id')
  .get(getUserValidator, getUser)
  .put(uploadUserImage, resizeImage, updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);
=======
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
    '/changePassword/:id',
    changeUserPasswordValidator,
    changeUserPassword
);
router
    .route('/')
    .get(getUsers)
    .post(uploadUserImage, resizeImage, createUserValidator, createUser);
router
    .route('/:id')
    .get(getUserValidator, getUser)
    .put(uploadUserImage, resizeImage, updateUserValidator, updateUser)
    .delete(deleteUserValidator, deleteUser);
<<<<<<< HEAD
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f

module.exports = router;