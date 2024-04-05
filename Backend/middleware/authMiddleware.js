const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware function to authenticate user
const authenticateUser = async (req, res, next) => {
    try {
        // Extract token from request headers
        const token = req.header('Authorization').replace('Bearer ', '');

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Find the user by ID and token
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error();
        }

        // Attach the user and token to the request object
        req.user = user;
        req.token = token;

        next(); // Call next to continue to the next middleware or route handler
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

// Middleware function to check if user is an admin
const isAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
        return res.status(403).send({ error: 'You are not authorized to access this resource.' });
    }
    next();
};

module.exports = { authenticateUser, isAdmin };
