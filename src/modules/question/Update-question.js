const { NotFoundError } = require("../../shared/errors")
const Question = require("./Question")

const UpdateQuestion = async ({body,params})=> {
    let exstingQuestion = await Question.findById(params.id)
    if (!exstingQuestion) {
        throw new NotFoundError("not found question")
    }
    let newObj = {
        question:body.question ? body.question :exstingQuestion.question,
        answer:body.answer ? body.answer : exstingQuestion.answer
    }
    
    let Updated = await Question.findByIdAndUpdate(params.id,newObj,{new:true})
    return {data:Updated,message:"Question updated"}
}

module.exports = UpdateQuestion