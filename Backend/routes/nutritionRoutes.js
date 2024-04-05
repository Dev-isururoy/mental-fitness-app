const express = require('express');
const router = express.Router();
const nutritionController = require('../controllers/nutritionController');

// Route to get all nutrition logs
router.get('/', nutritionController.getAllNutritionLogs);

// Route to create a new nutrition log
router.post('/', nutritionController.createNutritionLog);

// Route to get a specific nutrition log by ID
router.get('/:id', nutritionController.getNutritionLogById);

// Route to update a specific nutrition log by ID
router.put('/:id', nutritionController.updateNutritionLog);

// Route to delete a specific nutrition log by ID
router.delete('/:id', nutritionController.deleteNutritionLog);

module.exports = router;
