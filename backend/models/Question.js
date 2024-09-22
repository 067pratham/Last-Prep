// backend/models/Question.js
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true
    },
    questionText: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Question', QuestionSchema);
