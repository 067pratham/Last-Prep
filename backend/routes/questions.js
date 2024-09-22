// backend/routes/questions.js
const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// GET 10 random questions by subject
router.get('/:subject', async (req, res) => {
    const subject = req.params.subject;
    try {
        const questions = await Question.aggregate([
            { $match: { subject: subject } },
            { $sample: { size: 10 } }
        ]);
        res.json(questions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
