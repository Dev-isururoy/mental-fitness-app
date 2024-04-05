// Import necessary modules
const Habit = require('../models/Habit');

// Controller actions for habit tracking functionality

// Get all habits
exports.getAllHabits = async (req, res) => {
    try {
        const habits = await Habit.find();
        res.json(habits);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new habit
exports.createHabit = async (req, res) => {
    const { name, description } = req.body;

    try {
        // Create a new habit instance
        const newHabit = new Habit({
            name,
            description,
            user: req.user.id // Assuming user ID is attached to the request object after authentication
        });

        // Save the new habit to the database
        await newHabit.save();

        res.json(newHabit);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get a single habit by ID
exports.getHabitById = async (req, res) => {
    const id = req.params.id;

    try {
        const habit = await Habit.findById(id);

        if (!habit) {
            return res.status(404).json({ msg: 'Habit not found' });
        }

        res.json(habit);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a habit
exports.updateHabit = async (req, res) => {
    const id = req.params.id;
    const { name, description } = req.body;

    try {
        let habit = await Habit.findById(id);

        if (!habit) {
            return res.status(404).json({ msg: 'Habit not found' });
        }

        // Update the habit
        habit.name = name;
        habit.description = description;

        await habit.save();

        res.json(habit);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a habit
exports.deleteHabit = async (req, res) => {
    const id = req.params.id;

    try {
        let habit = await Habit.findById(id);

        if (!habit) {
            return res.status(404).json({ msg: 'Habit not found' });
        }

        // Delete the habit
        await habit.remove();

        res.json({ msg: 'Habit removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
