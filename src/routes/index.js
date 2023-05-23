import { Router } from "express";
import { createQuestionItemController, deleteQuestionItemsController, getAllQuestionsItemsController, updateQuestionItemsController } from "../controllers/questionItem.controllers.js";
import { autoIncrement } from "../middleware/autoIncrement.middleware.js";

const router = Router()

router
  .post('/', autoIncrement ,createQuestionItemController)
  .get('/', getAllQuestionsItemsController)
  .put('/:id', updateQuestionItemsController)
  .delete('/:id', deleteQuestionItemsController)

export default router