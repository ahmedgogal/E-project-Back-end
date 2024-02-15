const jwt = require('jsonwebtoken');

const createToken = (payload) =>
<<<<<<< HEAD
  jwt.sign({ userId: payload }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
=======
    jwt.sign({ userId: payload }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRE_TIME,
    });
>>>>>>> 7bff9f307dc8d7f4c3f2a7c28ec3e1790008488f

module.exports = createToken;