const mongoose = require('mongoose');

const moodEntrySchema = new mongoose.Schema({
    mood: {
        type: String,
        enum: ['happy', 'sad', 'angry', 'anxious', 'calm', 'excited', 'stressed', 'content', 'tired', 'energetic'],
        required: true
    },
    notes: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('MoodEntry', moodEntrySchema);
