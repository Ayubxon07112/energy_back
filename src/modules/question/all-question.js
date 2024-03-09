const Question = require("./Question");

const AllQuestion = async () => {
  let questions = await Question.find();
  return { message: "all questions", data: questions };
};

module.exports = AllQuestion;
