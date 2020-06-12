const mongoose = require('mongoose');

const PaperItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    authors: [
        {
            name: String
        }
    ],
    links: [
        {
            title: String,
            href: String,
            type: String,
            rel: String
        }
    ],
    published: {
        type: String,
    },
    updated: {
        type: String,
    },
    creation_time: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('PaperItem', PaperItemSchema);