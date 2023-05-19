import { createQuestionItemServices, getAllQuestionsItemServices, updateQuestionItemService } from "../services/questionItem.services.js"

const createQuestionItemController = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).send({ message: 'Error creating', error: error })
  }
}

const getAllQuestionsItemsController = async (_req, res) => {
  try {
    const getAll = await getAllQuestionsItemServices()
    res.status(200).send({ status: 'OK', data: { getAll }})
  } catch (error) {
    res.status(500).send({ message: 'Error getting', error: error })
  }
}

const updateQuestionItemsController = async (req, res) => {
  try {
    const { body, params: { id }} = req
    const updateQuestionItems = await updateQuestionItemService(id, body)
    res.status(200).send({status: 'OK', data: { updateQuestionItems }})
  } catch (error) {
    res.status(500).send({ message: 'Error updating', error: error })
  }
}


export {
  createQuestionItemController,
  getAllQuestionsItemsController,
  updateQuestionItemsController
}