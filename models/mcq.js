// models/mcq.js
const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  choices: [
    {
      choiceText: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

module.exports = mongoose.model('MCQ', mcqSchema);
