const mongoose = require('mongoose');

const workoutSessionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    exercises: [{
        type: String,
        required: true
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('WorkoutSession', workoutSessionSchema);
