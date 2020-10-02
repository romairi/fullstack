const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
    search_name: {
        type: String,
        required: true,
    },

    include_tags: [{
        type: String,
    }],

    exclude_tags: [{
        type: String,
    }],

    creation_time: {
        type: Date,
        default: Date.now,
    },

    viewed_papers: [{
        type: String,
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

SearchSchema.statics.getSearchById = async function (searchId, userId) {
    return await this.findOne({_id: searchId, user: userId});
};

SearchSchema.statics.addNewPapers = async function (searchId, newPapers) {
    return await this.findByIdAndUpdate(searchId, {$push: {viewed_papers: {"$each": newPapers}}}, {});
};

module.exports = mongoose.model('Search', SearchSchema);
