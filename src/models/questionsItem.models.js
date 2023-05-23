import { Schema, model } from "mongoose";

export const questionsItem = new Schema({
  name: String,
  question_id: {
    type: Number,
    default: 1
  },
  question: {
    type: Schema.Types.ObjectId
  }
},
  {
    timestamps: true,
    versionKey: false
  })

export const questionsItemModel =  model('Question_item', questionsItem)




