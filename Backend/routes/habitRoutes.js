const express = require('express');
const router = express.Router();
const habitController = require('../controllers/habitController');

// Route to get all habits
router.get('/', habitController.getAllHabits);

// Route to create a new habit
router.post('/', habitController.createHabit);

// Route to get a specific habit by ID
router.get('/:id', habitController.getHabitById);

// Route to update a specific habit by ID
router.put('/:id', habitController.updateHabit);

// Route to delete a specific habit by ID
router.delete('/:id', habitController.deleteHabit);

module.exports = router;
