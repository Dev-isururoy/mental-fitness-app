// Import necessary modules
const MoodEntry = require('../models/MoodEntry');

// Controller actions for mood functionality

// Get all mood entries
exports.getAllMoodEntries = async (req, res) => {
    try {
        const moodEntries = await MoodEntry.find();
        res.json(moodEntries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new mood entry
exports.createMoodEntry = async (req, res) => {
    const { mood, notes } = req.body;

    try {
        // Create a new mood entry instance
        const newMoodEntry = new MoodEntry({
            mood,
            notes,
            user: req.user.id // Assuming user ID is attached to the request object after authentication
        });

        // Save the new mood entry to the database
        await newMoodEntry.save();

        res.json(newMoodEntry);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get a single mood entry by ID
exports.getMoodEntryById = async (req, res) => {
    const id = req.params.id;

    try {
        const moodEntry = await MoodEntry.findById(id);

        if (!moodEntry) {
            return res.status(404).json({ msg: 'Mood entry not found' });
        }

        res.json(moodEntry);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a mood entry
exports.updateMoodEntry = async (req, res) => {
    const id = req.params.id;
    const { mood, notes } = req.body;

    try {
        let moodEntry = await MoodEntry.findById(id);

        if (!moodEntry) {
            return res.status(404).json({ msg: 'Mood entry not found' });
        }

        // Update the mood entry
        moodEntry.mood = mood;
        moodEntry.notes = notes;

        await moodEntry.save();

        res.json(moodEntry);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a mood entry
exports.deleteMoodEntry = async (req, res) => {
    const id = req.params.id;

    try {
        let moodEntry = await MoodEntry.findById(id);

        if (!moodEntry) {
            return res.status(404).json({ msg: 'Mood entry not found' });
        }

        // Delete the mood entry
        await moodEntry.remove();

        res.json({ msg: 'Mood entry removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
