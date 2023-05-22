import { createQuestionItemServices, deleteQuestionItemService, getAllQuestionsItemServices, updateQuestionItemService } from "../services/questionItem.services.js"
import mongoose from "mongoose"

const createQuestionItemController = async (req, res) => {
  try {
    const { name, question } = req.body
    if(!name || !question){
      res.status(404).send({ message: 'Please fill all required fields'})
    } else {
      const newQuestion = {
        name,
        question
      }
      await createQuestionItemServices(newQuestion)
      res.status(200).send({ status: 'OK', data: newQuestion })
    }
  } catch (error) {
    res.status(500).send({ status: 'BAD REQUEST', message: 'Error creating', error: error })
  }
}

const getAllQuestionsItemsController = async (_req, res) => {
  try {
    const getAll = await getAllQuestionsItemServices()
    res.status(200).json({ status: 'OK', data: getAll })
  } catch (error) {
    res.status(500).send({ status: 'BAD REQUEST', message: 'Error getting', error: error })
  }
}

const updateQuestionItemsController = async (req, res) => {
  try {
    const { body, params: { id }} = req
    const updateQuestionItems = await updateQuestionItemService(id, body)
    res.status(200).send({status: 'OK', data: updateQuestionItems })
  } catch (error) {
    res.status(500).send({ status: 'BAD REQUEST', message: 'Error updating', error: error })
  }
}

const deleteQuestionItemsController = async (req, res) => {
  try {
    const { id } = req.params
    if(mongoose.Types.ObjectId.isValid(id)) {
      const questionItem = await deleteQuestionItemService(id)
      res.status(200).send({status: 'OK', message: 'Question is deleted', data: questionItem })
    } else {
      res.status(500).send({status: 'BAD REQUEST', message: 'Please enter a right id'})
    }
  } catch (error) {
    req.status(500).send({ status: 'BAD REQUEST', message: 'Error deleting', error: error})
  }

}


export {
  createQuestionItemController,
  getAllQuestionsItemsController,
  updateQuestionItemsController,
  deleteQuestionItemsController
}