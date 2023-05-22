import { questionsItemModel } from "../models/questionsItem.models.js"

const createQuestionItemServices = (question) => {
  const newQuestion = questionsItemModel.create(question);
  return newQuestion
}

const getAllQuestionsItemServices = () => {
  const findAllQuestions = questionsItemModel.find()
questionsItemModel.aggregate([
  {
    $lookup: {
      from: 'questions',
      localField: 'question_name',
      foreignField: '_id',
      as: 'question_name_primary'
    }
  },
  {
    $unwind: '$question_name_primary'
  }
]).then(results => {
    console.log(results)
  }).catch(err => {
    console.log(err)
  })
  return findAllQuestions
}

const getOneQuestionItemService = (id) => {
  const findOne = questionsItemModel.findById(id)
  return findOne
}

const updateQuestionItemService = (id, question) => {
  const updateQuestion = questionsItemModel.findByIdAndUpdate(id, question, { new: true })
  return updateQuestion
}

const deleteQuestionItemService = (id) => {
  const deleteQuestion = questionsItemModel.findByIdAndDelete(id)
  return deleteQuestion
}

export { 
  createQuestionItemServices, 
  getAllQuestionsItemServices, 
  getOneQuestionItemService, 
  updateQuestionItemService, 
  deleteQuestionItemService
}
