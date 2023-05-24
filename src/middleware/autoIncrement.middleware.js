import { questionsItemModel } from "../models/questionsItem.models.js"

export const autoIncrement = async (req, res, next) => {
  const count = questionsItemModel.estimatedDocumentCount()
  if(count === 0) {
    next()
  }
  await questionsItemModel.findOne({}, {name: 1, createdAt: 1, question_id: 1}).sort({createdAt: -1})
    .exec()
    .then(item => {
      req.reqItem = item
    })
  next()
}