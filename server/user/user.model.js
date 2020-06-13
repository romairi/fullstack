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

UserSchema.statics.addPaper = async function (id, args) {
    const user = await this.findById(id).populate('paperItems');
    const foundPaper = user.paperItems.find(item => item.paperId === args.id);
    if (!foundPaper) {
        const paper = await PaperItem.findByPaperIdOrCreate(args.id, {
            paperId: args.id,
            title: args.title,
            summary: args.summary
        }); // TODO use all args ( by using ...args)
        await this.findByIdAndUpdate(id, {$push: {paperItems: paper.id}}, {});
        return {
            paper: await paper.save(),
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