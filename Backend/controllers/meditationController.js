// Import necessary modules
const MeditationSession = require('../models/MeditationSession');

// Controller actions for meditation functionality

// Get all meditation sessions
exports.getAllMeditationSessions = async (req, res) => {
    try {
        const meditationSessions = await MeditationSession.find();
        res.json(meditationSessions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new meditation session
exports.createMeditationSession = async (req, res) => {
    const { duration, notes } = req.body;

    try {
        // Create a new meditation session instance
        const newMeditationSession = new MeditationSession({
            duration,
            notes,
            user: req.user.id // Assuming user ID is attached to the request object after authentication
        });

        // Save the new meditation session to the database
        await newMeditationSession.save();

        res.json(newMeditationSession);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get a single meditation session by ID
exports.getMeditationSessionById = async (req, res) => {
    const id = req.params.id;

    try {
        const meditationSession = await MeditationSession.findById(id);

        if (!meditationSession) {
            return res.status(404).json({ msg: 'Meditation session not found' });
        }

        res.json(meditationSession);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a meditation session
exports.updateMeditationSession = async (req, res) => {
    const id = req.params.id;
    const { duration, notes } = req.body;

    try {
        let meditationSession = await MeditationSession.findById(id);

        if (!meditationSession) {
            return res.status(404).json({ msg: 'Meditation session not found' });
        }

        // Update the meditation session
        meditationSession.duration = duration;
        meditationSession.notes = notes;

        await meditationSession.save();

        res.json(meditationSession);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a meditation session
exports.deleteMeditationSession = async (req, res) => {
    const id = req.params.id;

    try {
        let meditationSession = await MeditationSession.findById(id);

        if (!meditationSession) {
            return res.status(404).json({ msg: 'Meditation session not found' });
        }

        // Delete the meditation session
        await meditationSession.remove();

        res.json({ msg: 'Meditation session removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
