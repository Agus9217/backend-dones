import { Schema, model } from "mongoose";

const questionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  }
},
{
  timestamps: true,
  versionKey: false
})

export default model('Question', questionSchema)
