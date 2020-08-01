const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
    include_tags: [{}],

    exclude_tags: [{}],

    creation_time: {
        type: Date,
        default: Date.now,
    },
    viewed_papers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PaperItem'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});


module.exports = mongoose.model('Search', SearchSchema);
