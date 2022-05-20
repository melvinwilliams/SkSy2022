import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    due: {
        required: true,
        type: Date
    }
    ,
    percent: {
        required: true,
        type: Number
    }
})

export const Todo = mongoose.model('Data', TodoSchema)
