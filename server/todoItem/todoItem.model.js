const mongoose = require('mongoose');

const TodoItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model('TodoItem', TodoItemSchema);