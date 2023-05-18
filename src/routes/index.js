import { Router } from "express";
import { createQuestionItemController } from "../controllers/questionItem.controllers.js";

const router = Router()

router
  .post('/', createQuestionItemController)


export default router