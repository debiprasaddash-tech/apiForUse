// controllers/mcqController.js
const MCQ = require("../models/mcq");

// Controller to create an MCQ question
exports.createMCQ = async (req, res) => {
  try {
    const mcq = new MCQ(req.body);
    await mcq.save();
    res.status(201).json(mcq);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller to retrieve all MCQ questions
exports.getAllMCQs = async (req, res) => {
  try {
    const mcqs = await MCQ.find();
    res.status(200).json(mcqs);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
