const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    text: {
        required: true,
        type: String
    },
    due: {
        required: true,
        type: Date
    },
    percent: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)