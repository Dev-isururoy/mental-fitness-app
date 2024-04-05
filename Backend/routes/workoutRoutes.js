const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

// Route to get all workout sessions
router.get('/', workoutController.getAllWorkoutSessions);

// Route to create a new workout session
router.post('/', workoutController.createWorkoutSession);

// Route to get a specific workout session by ID
router.get('/:id', workoutController.getWorkoutSessionById);

// Route to update a specific workout session by ID
router.put('/:id', workoutController.updateWorkoutSession);

// Route to delete a specific workout session by ID
router.delete('/:id', workoutController.deleteWorkoutSession);

module.exports = router;
