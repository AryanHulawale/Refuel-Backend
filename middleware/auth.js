const jwt = require('jsonwebtoken');
const User = require('../app/models/User');
const { JWT_SECRET } = require('../config/constants');
const ErrorResponse = require('../app/utils/errorHandler');

exports.protect = async (req, res, next) => {
  let token;

  // Get token from header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new ErrorResponse('Not authorized', 401));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorized', 401));
  }
};