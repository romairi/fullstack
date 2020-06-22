const _ = require('lodash');
const HttpStatus = require('http-status-codes');
const arxiv = require('arxiv-api');
const UserModel = require('../user/user.model');
const {formatPaper} = require("../services/formatPaper");

async function searchPapers(req, res, next) {
    const {includeList, excludeList, start, maxResults} = req.body;

    const resultPapers = await arxiv.search({
        searchQueryParams: [
            {
                include: includeList.map(s => ({name: s})),
                exclude: excludeList.map(s => ({name: s})),
            }
        ],
        start,
        maxResults: Math.min(maxResults, 30),
    });

    res.json(resultPapers.map(formatPaper));
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
        const data = await UserModel.addPaper(userId, paper);
        return res.status(HttpStatus.CREATED).json(data.paper);
    } catch (err) {
        next(err);
    }
}

async function removePaper(req, res, next) {
    const {paperId} = req.body;
    const userId = req.user._id;

    try {
        const data = await UserModel.removePaper(userId, paperId);
        return res.status(HttpStatus.CREATED).json(data.paperId);
    } catch (err) {
        next(err);
    }
}


module.exports = {getPapers, searchPapers, savePaper, removePaper};
