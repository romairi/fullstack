const _ = require('lodash');
const HttpStatus = require('http-status-codes');
const arxiv = require('arxiv-api');
const UserModel = require('../user/user.model');

async function searchPapers(req, res, next) {
    const {includeList, excludeList} = req.body;

    const resultPapers = await arxiv.search({
        searchQueryParams: [
            {
                include: includeList.map(s => ({name: s})),
                exclude: excludeList.map(s => ({name: s})),
            }
        ],
        start: 0,
        maxResults: 10,
    });

    res.json(resultPapers);
}

async function getPapers(req, res, next) {
    const userId = req.user._id;

    try {
        const userPapers = await UserModel.getPapers(userId);
        return res.json(userPapers);
    } catch (err) {
        next(err);
    }
}

async function savePaper(req, res, next) {
    const {paper} = req.body;
    const userId = req.user._id;

    try {
        const {newPaper} = UserModel.addPaper(userId, paper);
        return res.status(HttpStatus.CREATED).json(newPaper);
    } catch (err) {
        next(err);
    }
}


module.exports = {getPapers, searchPapers, savePaper};
