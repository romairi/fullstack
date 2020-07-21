const mongoose = require('mongoose');
const PaperItem = require('../paper/model');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique: true
    },
    creation_time: {
        type: Date,
        default: Date.now,
    },
    paperItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PaperItem'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

CategorySchema.statics.addPaper = async function (categoryId, paper) {
    const category = await this.findById(categoryId).populate('paperItems');
    const foundPaper = category.paperItems.find(item => item.paperId === paper.paperId);
    if (!foundPaper) {
        const paperObj = await PaperItem.findByPaperIdOrCreate(paper.paperId, paper);
        await this.findByIdAndUpdate(categoryId, {$push: {paperItems: paperObj.id}}, {});
        return {
            paper: await paperObj.save(),
        };
    }
    return {
        paper: foundPaper
    }

};

CategorySchema.statics.removePaper = async function (categoryId, paperId) {
    const category = await this.findById(categoryId).populate('paperItems');
    category.paperItems = category.paperItems.filter(paper => paper.paperId !== paperId);
    await category.save();
    return {
        paperId
    };
};

CategorySchema.statics.getPapers = async function (categoryId) {
    const category = await this.findById(categoryId).populate('paperItems');
    return category.paperItems;
};

module.exports = mongoose.model('Category', CategorySchema);
