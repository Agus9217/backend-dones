
const createQuestionItemServices = (question) => {
  const newQuestion = questionsModels.create(question)
  return newQuestion
}

const getAllQuestionsItemServices = () => {
  const findAllQuestions = questionsModels.find()
  return findAllQuestions
}

const getOneQuestionItemService = (id) => {
  const findOne = questionsModels.findById(id)
  return findOne
}

const updateQuestionItemService = (question) => {
  const updateQuestion = questionsModels.findOneAndUpdate(question)
  return updateQuestion
}

const deleteQuestionItemService = (id) => {
  const deleteQuestion = questionsModels.findByIdAndDelete(id)
  return deleteQuestion
}

export { 
  createQuestionItemServices, 
  getAllQuestionsItemServices, 
  getOneQuestionItemService, 
  updateQuestionItemService, 
  deleteQuestionItemService
}
