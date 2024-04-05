// Import necessary modules
const JournalEntry = require('../models/JournalEntry');

// Controller actions for journal functionality

// Get all journal entries
exports.getAllJournalEntries = async (req, res) => {
    try {
        const journalEntries = await JournalEntry.find();
        res.json(journalEntries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new journal entry
exports.createJournalEntry = async (req, res) => {
    const { title, content } = req.body;

    try {
        // Create a new journal entry instance
        const newJournalEntry = new JournalEntry({
            title,
            content,
            user: req.user.id // Assuming user ID is attached to the request object after authentication
        });

        // Save the new journal entry to the database
        await newJournalEntry.save();

        res.json(newJournalEntry);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Get a single journal entry by ID
exports.getJournalEntryById = async (req, res) => {
    const id = req.params.id;

    try {
        const journalEntry = await JournalEntry.findById(id);

        if (!journalEntry) {
            return res.status(404).json({ msg: 'Journal entry not found' });
        }

        res.json(journalEntry);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a journal entry
exports.updateJournalEntry = async (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;

    try {
        let journalEntry = await JournalEntry.findById(id);

        if (!journalEntry) {
            return res.status(404).json({ msg: 'Journal entry not found' });
        }

        // Update the journal entry
        journalEntry.title = title;
        journalEntry.content = content;

        await journalEntry.save();

        res.json(journalEntry);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a journal entry
exports.deleteJournalEntry = async (req, res) => {
    const id = req.params.id;

    try {
        let journalEntry = await JournalEntry.findById(id);

        if (!journalEntry) {
            return res.status(404).json({ msg: 'Journal entry not found' });
        }

        // Delete the journal entry
        await journalEntry.remove();

        res.json({ msg: 'Journal entry removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
