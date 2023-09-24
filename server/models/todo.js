import mongoose from "mongoose";
const {Schema} = mongoose;

const todoSchema = new Schema({
     taskName: {
          type: String,
          required: true,
     },
     description: {
         type: String,
         required: true,

     },
     date: {
          type: Date,
          default: new Date(),
          required: true,
     },
     completed: {
          type: Boolean,
     },
     user: {
          type: mongoose.ObjectId,
          ref: 'User',

     },
     priority: {
          type : String,
          enum: ["High","Medium","Low"],

     }
}, {timestamps: true});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;