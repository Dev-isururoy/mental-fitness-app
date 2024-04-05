const mongoose = require('mongoose');

const nutritionLogSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    meals: [{
        name: {
            type: String,
            required: true
        },
        calories: {
            type: Number,
            required: true
        },
        // You can add more fields here such as macronutrient breakdown (protein, carbs, fat), etc.
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('NutritionLog', nutritionLogSchema);
