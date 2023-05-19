import { questionsItemModel } from "../models/questionsItem.models.js"

const createQuestionItemServices = (question) => {
  const newQuestion = questionsItemModel.create(question);
  return newQuestion
}

const getAllQuestionsItemServices = () => {
  const findAllQuestions = questionsItemModel.find()
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
