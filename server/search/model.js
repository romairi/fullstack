const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
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



SearchSchema.statics.getSearches = async function (userId) {
    const search = await this.findById(userId).populate('include_tags').populate('exclude_tags');
    return search.include_tags;
};

module.exports = mongoose.model('Search', SearchSchema);
