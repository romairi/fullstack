const mongoose = require('mongoose');

const PaperItemSchema = new mongoose.Schema({
    paperId: {
      type: String,
        required: true,
    },
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

PaperItemSchema.statics.findByPaperIdOrCreate = async function (paperId, args) {
    const paper = await this.findOne({paperId});
    return paper || this.create(args);
};

module.exports = mongoose.model('PaperItem', PaperItemSchema);