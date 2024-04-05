const express = require('express');
const router = express.Router();
const moodController = require('../controllers/moodController');

// Route to get all mood entries
router.get('/', moodController.getAllMoodEntries);

// Route to create a new mood entry
router.post('/', moodController.createMoodEntry);

// Route to get a specific mood entry by ID
router.get('/:id', moodController.getMoodEntryById);

// Route to update a specific mood entry by ID
router.put('/:id', moodController.updateMoodEntry);

// Route to delete a specific mood entry by ID
router.delete('/:id', moodController.deleteMoodEntry);

module.exports = router;
