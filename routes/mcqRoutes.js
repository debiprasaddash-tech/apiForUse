// routes/mcqRoutes.js
const express = require('express');
const router = express.Router();
const mcqController = require('../controllers/mcqController');

// Create an MCQ question
router.post('/mcqs', mcqController.createMCQ);

// Get all MCQ questions
router.get('/mcqs', mcqController.getAllMCQs);

module.exports = router;
