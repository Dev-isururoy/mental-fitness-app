const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Register a new user
router.post('/register', authController.register);

// Login route
router.post('/login', authController.login);

// Logout route
router.get('/logout', authController.logout);

// Example of a route that requires authentication
router.get('/profile', authController.authenticateUser, authController.getProfile);

module.exports = router;
