import { Schema, model } from "mongoose";

const questionsItem = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
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

questionsItemModel.aggregate([
  {
    $lookup: {
      from: 'Questions',
      localField: 'question_name',
      foreignField: '_id',
      as: 'question_name_primary'
    }
  }
]).then(results => {
    console.log(results)
  }).catch(err => {
    console.log(err)
  })
