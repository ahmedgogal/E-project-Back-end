const express = require('express');
const {
<<<<<<< HEAD
<<<<<<< HEAD
  signupValidator,
  loginValidator,
} = require('../utils/validators/authValidator');

const {
  signup,
  login,
  forgotPassword,
  verifyPassResetCode,
  resetPassword,
=======
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
    signupValidator,
    loginValidator,
} = require('../utils/validators/authValidator');

const {
    signup,
    login,
    forgotPassword,
    verifyPassResetCode,
    resetPassword,
<<<<<<< HEAD
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
=======
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f
} = require('../services/authService');

const router = express.Router();

router.post('/signup', signupValidator, signup);
router.post('/login', loginValidator, login);
router.post('/forgotPassword', forgotPassword);
router.post('/verifyResetCode', verifyPassResetCode);
router.put('/resetPassword', resetPassword);

module.exports = router;