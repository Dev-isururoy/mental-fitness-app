// Import necessary modules
const WorkoutSession = require('../models/WorkoutSession');

// Controller actions for workout functionality

// Get all workout sessions
exports.getAllWorkoutSessions = async (req, res) => {
    try {
        const workoutSessions = await WorkoutSession.find();
        res.json(workoutSessions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new workout session
exports.createWorkoutSession = async (req, res) => {
    const { date, duration, exercises } = req.body;

    try {
        // Create a new workout session instance
        const newWorkoutSession = new WorkoutSession({
            date,
            duration,
            exercises,
            user: req.user.id // Assuming user ID is attached to the request object after authentication
        });

        // Save the new workout session to the database
        await newWorkoutSession.save();

        res.json(newWorkoutSession);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get a single workout session by ID
exports.getWorkoutSessionById = async (req, res) => {
    const id = req.params.id;

    try {
        const workoutSession = await WorkoutSession.findById(id);

        if (!workoutSession) {
            return res.status(404).json({ msg: 'Workout session not found' });
        }

        res.json(workoutSession);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a workout session
exports.updateWorkoutSession = async (req, res) => {
    const id = req.params.id;
    const { date, duration, exercises } = req.body;

    try {
        let workoutSession = await WorkoutSession.findById(id);

        if (!workoutSession) {
            return res.status(404).json({ msg: 'Workout session not found' });
        }

        // Update the workout session
        workoutSession.date = date;
        workoutSession.duration = duration;
        workoutSession.exercises = exercises;

        await workoutSession.save();

        res.json(workoutSession);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a workout session
exports.deleteWorkoutSession = async (req, res) => {
    const id = req.params.id;

    try {
        let workoutSession = await WorkoutSession.findById(id);

        if (!workoutSession) {
            return res.status(404).json({ msg: 'Workout session not found' });
        }

        // Delete the workout session
        await workoutSession.remove();

        res.json({ msg: 'Workout session removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
