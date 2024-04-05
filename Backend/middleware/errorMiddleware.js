// Error middleware function to handle errors
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace

    // Check if the error is a Mongoose validation error
    if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map(error => error.message);
        return res.status(400).json({ errors });
    }

    // Check if the error is a JWT authentication error
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Invalid token' });
    }

    // Handle other types of errors
    res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorHandler;
