const express = require('express');
const router = express.Router();
const sleepController = require('../controllers/sleepController');

// Route to get all sleep logs
router.get('/', sleepController.getAllSleepLogs);

// Route to create a new sleep log
router.post('/', sleepController.createSleepLog);

// Route to get a specific sleep log by ID
router.get('/:id', sleepController.getSleepLogById);

// Route to update a specific sleep log by ID
router.put('/:id', sleepController.updateSleepLog);

// Route to delete a specific sleep log by ID
router.delete('/:id', sleepController.deleteSleepLog);

module.exports = router;
