const mongoose = require("mongoose");

let QuestionSchema = new mongoose.Schema({
  question: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  answer: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});

let Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
