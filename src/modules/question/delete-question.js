const { NotFoundError } = require("../../shared/errors")
const Question = require("./Question")

const DeleteQuestion = async ({params}) => {
    let exstingQuestion = await Question.findById(params.id)
    if (!exstingQuestion) {
        throw new NotFoundError("Not found question")
    }
    await Question.findByIdAndDelete(params.id)
    return {data:exstingQuestion,message:"question deleted"}
}

module.exports = DeleteQuestion