// Middleware function to validate request data
const validateRequestData = (req, res, next) => {
    // Example validation: Check if request body contains required fields
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({ error: 'Name, email, and password are required.' });
    }

    // Add more validation logic as needed based on your requirements

    // If all validation passes, call next to proceed to the next middleware or route handler
    next();
};

module.exports = validateRequestData;
