const express = require('express');
const router = express.Router();
const journalController = require('../controllers/journalController');

// Route to get all journal entries
router.get('/', journalController.getAllJournalEntries);

// Route to create a new journal entry
router.post('/', journalController.createJournalEntry);

// Route to get a specific journal entry by ID
router.get('/:id', journalController.getJournalEntryById);

// Route to update a specific journal entry by ID
router.put('/:id', journalController.updateJournalEntry);

// Route to delete a specific journal entry by ID
router.delete('/:id', journalController.deleteJournalEntry);

module.exports = router;
