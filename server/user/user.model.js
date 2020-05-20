const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        maxLength: 200,
    },
    creation_time: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('User', UserSchema);