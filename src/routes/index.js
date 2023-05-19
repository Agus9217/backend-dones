import { Router } from "express";
import { createQuestionItemController, getAllQuestionsItemsController, updateQuestionItemsController } from "../controllers/questionItem.controllers.js";

const router = Router()

router
  .post('/', createQuestionItemController)
  .get('/', getAllQuestionsItemsController)
  .put('/:id', updateQuestionItemsController)


export default router