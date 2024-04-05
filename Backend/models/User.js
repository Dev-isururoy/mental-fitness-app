const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // Add any additional fields you might need for user profile or settings
  // For example:
  // age: {
  //   type: Number,
  //   required: true
  // },
  // gender: {
  //   type: String,
  //   enum: ['male', 'female', 'other']
  // },
  // height: {
  //   type: Number
  // },
  // weight: {
  //   type: Number
  // },
  // Add timestamps for createdAt and updatedAt
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
