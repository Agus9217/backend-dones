import { Router } from "express";
import { createQuestionItemController, deleteQuestionItemsController, getAllQuestionsItemsController, updateQuestionItemsController } from "../controllers/questionItem.controllers.js";

const router = Router()

router
  .post('/', createQuestionItemController)
  .get('/', getAllQuestionsItemsController)
  .put('/:id', updateQuestionItemsController)
  .delete('/:id', deleteQuestionItemsController)

export default router