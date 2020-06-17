const PaperItem = require('../paper/model');
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
    },
    paperItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PaperItem'
    }],
});

UserSchema.statics.addPaper = async function (id, paper) {
    const user = await this.findById(id).populate('paperItems');
    const foundPaper = user.paperItems.find(item => item.paperId === paper.paperId);
    if (!foundPaper) {
        const paperObj = await PaperItem.findByPaperIdOrCreate(paper.paperId, paper);
        await this.findByIdAndUpdate(id, {$push: {paperItems: paperObj.id}}, {});
        return {
            paper: await paperObj.save(),
        };
    }
    return {
        paper: foundPaper
    }

};

UserSchema.statics.getPapers = async function (id) {
    const user = await this.findById(id).populate('paperItems');
    return user.paperItems;
};

module.exports = mongoose.model('User', UserSchema);
