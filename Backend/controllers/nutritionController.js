// Import necessary modules
const NutritionLog = require('../models/NutritionLog');

// Controller actions for nutrition functionality

// Get all nutrition logs
exports.getAllNutritionLogs = async (req, res) => {
    try {
        const nutritionLogs = await NutritionLog.find();
        res.json(nutritionLogs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new nutrition log
exports.createNutritionLog = async (req, res) => {
    const { date, meals } = req.body;

    try {
        // Create a new nutrition log instance
        const newNutritionLog = new NutritionLog({
            date,
            meals,
            user: req.user.id // Assuming user ID is attached to the request object after authentication
        });

        // Save the new nutrition log to the database
        await newNutritionLog.save();

        res.json(newNutritionLog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get a single nutrition log by ID
exports.getNutritionLogById = async (req, res) => {
    const id = req.params.id;

    try {
        const nutritionLog = await NutritionLog.findById(id);

        if (!nutritionLog) {
            return res.status(404).json({ msg: 'Nutrition log not found' });
        }

        res.json(nutritionLog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a nutrition log
exports.updateNutritionLog = async (req, res) => {
    const id = req.params.id;
    const { date, meals } = req.body;

    try {
        let nutritionLog = await NutritionLog.findById(id);

        if (!nutritionLog) {
            return res.status(404).json({ msg: 'Nutrition log not found' });
        }

        // Update the nutrition log
        nutritionLog.date = date;
        nutritionLog.meals = meals;

        await nutritionLog.save();

        res.json(nutritionLog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a nutrition log
exports.deleteNutritionLog = async (req, res) => {
    const id = req.params.id;

    try {
        let nutritionLog = await NutritionLog.findById(id);

        if (!nutritionLog) {
            return res.status(404).json({ msg: 'Nutrition log not found' });
        }

        // Delete the nutrition log
        await nutritionLog.remove();

        res.json({ msg: 'Nutrition log removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
