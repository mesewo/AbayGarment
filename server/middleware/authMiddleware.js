import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// Middleware to protect routes by verifying JWT
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Check if the Authorization header contains a Bearer token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extract the token from the header
      token = req.headers.authorization.split(' ')[1];

      // Verify the token using the secret key from the .env file
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the user object to the request for later use
      req.user = await User.findById(decoded.id).select('-password');

      next(); // Move to the next middleware or route handler
    } catch (error) {
      console.error('Token verification failed:', error.message);
      res.status(401);
      throw new Error('Not authorized, invalid token');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, token is missing');
  }
});

// Middleware to ensure admin access
const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // Proceed if the user is an admin
  } else {
    res.status(403); // Forbidden
    throw new Error('Not authorized as an admin');
  }
};

// Middleware to ensure seller or admin access
const seller = (req, res, next) => {
  if (req.user && (req.user.role === 'seller' || req.user.role === 'admin')) {
    next(); // Proceed if the user is a seller or an admin
  } else {
    res.status(403); // Forbidden
    throw new Error('Not authorized as a seller');
  }
};

export { protect, admin, seller };
