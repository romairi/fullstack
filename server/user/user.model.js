const CategoryModel = require('../category/model');
const SearchModel = require('../search/model');
const mongoose = require('mongoose');
const {uniqueSearch} = require("../services/addUniqueSearchService");
const {searchCronValue} = require("../configs/queueConfig");
const {getUpdatePapersQueue} = require("../services/updateQueueService");

const CATEGORIES_FIELD = 'categories';
const SEARCH_FIELD = 'searches';

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
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],

    searches: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Search'
    }]
});

UserSchema.statics.createUser = async function (args) {
    const user = await this.create(args);
    const category = new CategoryModel({name: 'default', user: user.id});
    await category.save();
    user.categories = [category];
    return await user.save();
};


UserSchema.statics.getSearches = async function (userId) {
    const user = await this.findById(userId).populate({
        path: SEARCH_FIELD,
        populate: {
            path: 'paperItems',
            model: 'PaperItem'
        }
    });
    return user.searches;
};

UserSchema.statics.addSearch = async function (userId, includeList, excludeList, viewedPapers, searchName, saveSearch) {
    const searchObj = new SearchModel({
        include_tags: includeList,
        exclude_tags: excludeList,
        viewed_papers: viewedPapers,
        user: userId,
        search_name: searchName
    });
    if (saveSearch) {
        const user = await this.findById(userId).populate(SEARCH_FIELD);
        const foundSimilarSearch  = uniqueSearch(user.searches, searchObj.include_tags, searchObj.exclude_tags);

        if (foundSimilarSearch) {
            return {
                search: null
            }
        }

    }
    await this.findByIdAndUpdate(userId, {$push: {searches: searchObj.id}}, {});
    return {
        search: await searchObj.save(),
    };
};

UserSchema.statics.removeSearch = async function (userId, searchId) {
    const user = await this.findById(userId).populate(SEARCH_FIELD);
    const search = user.searches.find(item => item.id === searchId);
    user.searches = user.searches.filter(item => item.id !== searchId);
    await user.save();
    await SearchModel.findOneAndRemove({_id: searchId});
    const updatePapersQueue = getUpdatePapersQueue();
    updatePapersQueue.removeRepeatable('searches', {jobId: search.job_id, cron: searchCronValue});

    return {
        searchId
    };
};

UserSchema.statics.getUserByEmail = async function (email) {
    return await this.findOne({email}).populate({
        path: CATEGORIES_FIELD,
        populate: {
            path: 'paperItems',
            model: 'PaperItem'
        },

    }).populate({
        path: SEARCH_FIELD,
        populate: {
            path: 'searches',
            model: 'Search'
        }
    });
};

UserSchema.statics.getUserById = async function (userId) {
    return await this.findById(userId).populate({
        path: CATEGORIES_FIELD,
        populate: {
            path: 'paperItems',
            model: 'PaperItem'
        }
    }).populate({
        path: SEARCH_FIELD,
        populate: {
            path: 'searches',
            model: 'Search'
        }
    });
};

UserSchema.statics.getCategories = async function (userId) {
    const user = await this.findById(userId).populate({
        path: CATEGORIES_FIELD,
        populate: {
            path: 'paperItems',
            model: 'PaperItem'
        }
    });
    return user.categories;
};


UserSchema.statics.addCategory = async function (userId, categoryName) {
    const user = await this.findById(userId).populate(CATEGORIES_FIELD);
    const foundCategory = user.categories.find(item => item.name === categoryName);
    if (!foundCategory) {
        const categoryObj = new CategoryModel({name: categoryName, user: userId});
        await this.findByIdAndUpdate(userId, {$push: {categories: categoryObj.id}}, {});
        return {
            category: await categoryObj.save(),
        };
    }
    return {
        category: null
    }
};

UserSchema.statics.removeCategory = async function (userId, categoryId) {
    const user = await this.findById(userId).populate(CATEGORIES_FIELD);
    if (user.categories.length > 1) {
        user.categories = user.categories.filter(item => item.id !== categoryId);
        await user.save();
        await CategoryModel.findOneAndRemove({_id: categoryId});
        return {
            categoryId
        };
    } else {
        return categoryId;
    }
};

UserSchema.statics.addPaper = async function (userId, categoryId, paper) {
    const user = await this.findById(userId).populate(CATEGORIES_FIELD);
    const foundCategory = user.categories.find(item => item.id === categoryId);
    if (foundCategory) {
        return await CategoryModel.addPaper(categoryId, paper);
    } else {
        throw new Error(); // TODO make it better error
    }
};

UserSchema.statics.removePaper = async function (userId, categoryId, paperId) {
    const user = await this.findById(userId).populate(CATEGORIES_FIELD);
    const foundCategory = user.categories.find(item => item.id === categoryId);
    if (foundCategory) {
        return await CategoryModel.removePaper(categoryId, paperId);
    } else {
        throw new Error(); // TODO make it better error
    }
};

module.exports = mongoose.model('User', UserSchema);
