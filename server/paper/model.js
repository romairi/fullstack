const mongoose = require('mongoose');

const PaperItemSchema = new mongoose.Schema({
    paperId: {
        type: String,
        required: true,
    },
    paper_id: {
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
    authors: [{}],
    pdfLink: {
        type: String,
    },
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
