// Import necessary modules
const SleepLog = require('../models/SleepLog');

// Controller actions for sleep functionality

// Get all sleep logs
exports.getAllSleepLogs = async (req, res) => {
    try {
        const sleepLogs = await SleepLog.find();
        res.json(sleepLogs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new sleep log
exports.createSleepLog = async (req, res) => {
    const { date, duration } = req.body;

    try {
        // Create a new sleep log instance
        const newSleepLog = new SleepLog({
            date,
            duration,
            user: req.user.id // Assuming user ID is attached to the request object after authentication
        });

        // Save the new sleep log to the database
        await newSleepLog.save();

        res.json(newSleepLog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get a single sleep log by ID
exports.getSleepLogById = async (req, res) => {
    const id = req.params.id;

    try {
        const sleepLog = await SleepLog.findById(id);

        if (!sleepLog) {
            return res.status(404).json({ msg: 'Sleep log not found' });
        }

        res.json(sleepLog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a sleep log
exports.updateSleepLog = async (req, res) => {
    const id = req.params.id;
    const { date, duration } = req.body;

    try {
        let sleepLog = await SleepLog.findById(id);

        if (!sleepLog) {
            return res.status(404).json({ msg: 'Sleep log not found' });
        }

        // Update the sleep log
        sleepLog.date = date;
        sleepLog.duration = duration;

        await sleepLog.save();

        res.json(sleepLog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a sleep log
exports.deleteSleepLog = async (req, res) => {
    const id = req.params.id;

    try {
        let sleepLog = await SleepLog.findById(id);

        if (!sleepLog) {
            return res.status(404).json({ msg: 'Sleep log not found' });
        }

        // Delete the sleep log
        await sleepLog.remove();

        res.json({ msg: 'Sleep log removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
