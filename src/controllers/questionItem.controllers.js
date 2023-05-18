import { createQuestionItemServices } from "../services/questionItem.services.js"

const createQuestionItemController = async (req, res) => {
  const { name, question_id, question_name } = req.body
  if(!name || !question_id || !question_name){
    res.status(404).send({ message: 'Please fill all required fields'})
  } else {
    const newQuestion = {
      name,
      question_id,
      question_name
    }
    await createQuestionItemServices(newQuestion)
    res.status(200).send({ status: 'OK', data: { newQuestion }})
  }
}


export {
  createQuestionItemController
}