const HttpStatus = require('http-status-codes');
const UserModel = require('../user/user.model');

async function addSearch(req, res, next) {
    const {searchIncTags, searchExcTags} = req.body;
    const userId = req.user._id;
    try {
        const data = await UserModel.addSearch(userId, searchIncTags, searchExcTags);
        return res.status(HttpStatus.CREATED).json(data.search);
    } catch (err) {
        next(err);
    }
}

async function removeSearch(req, res, next) {
    const {searchId} = req.body;
    const userId = req.user._id;
    try {
        const data = await UserModel.removeSearch(userId, searchId);
        return res.status(HttpStatus.CREATED).json(data);
    } catch (err) {
        next(err);
    }
}

module.exports = {addSearch, removeSearch};
