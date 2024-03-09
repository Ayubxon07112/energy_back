const { BadRequestError } = require("../../shared/errors");
const Question = require("./Question");

const AddQuestion = async ({ body }) => {
  let { question, ...data } = body;

  let exstingQuestion = await Question.findOne({ question: question });
  if (exstingQuestion) {
    throw new BadRequestError("question already exsist");
  }
  let createQuestion = await Question.create({ question, ...data });
  return { data: createQuestion, message: "created" };
};
module.exports = AddQuestion;
