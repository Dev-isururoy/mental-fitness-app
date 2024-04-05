const express = require('express');
const router = express.Router();
const meditationController = require('../controllers/meditationController');

// Route to get all meditation sessions
router.get('/', meditationController.getAllMeditationSessions);

// Route to create a new meditation session
router.post('/', meditationController.createMeditationSession);

// Route to get a specific meditation session by ID
router.get('/:id', meditationController.getMeditationSessionById);

// Route to update a specific meditation session by ID
router.put('/:id', meditationController.updateMeditationSession);

// Route to delete a specific meditation session by ID
router.delete('/:id', meditationController.deleteMeditationSession);

module.exports = router;
