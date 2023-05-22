import { Schema, model } from "mongoose";

const questionsItem = new Schema({
  name: String,
  question_id: {
    type: Number,
    required: true,
    trim: true,
  },
  question_name: {
    type: Schema.Types.ObjectId
  }
},
  {
    timestamps: true,
    versionKey: false
  })
  
export const questionsItemModel =  model('Question_item', questionsItem)


