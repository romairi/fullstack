const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
    searchName: {
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

module.exports = mongoose.model('Search', SearchSchema);
