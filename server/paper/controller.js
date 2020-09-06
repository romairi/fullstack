const HttpStatus = require('http-status-codes');
const arxiv = require('arxiv-api');
const UserModel = require('../user/user.model');
const {MAX_PAPERS_SEARCH} = require("./constants");
const {formatPaper} = require("../services/formatPaper");
const {getUpdatePapersQueue} = require('../services/updateQueueService');
const updatePapersQueue = getUpdatePapersQueue();

async function searchPapers(req, res, next) {
    const {includeList, excludeList, start, maxResults, saveSearch, searchName} = req.body;
    // TODO update search list on pagination

    const resultPapers = await arxiv.search({
        searchQueryParams: [
            {
                include: includeList.map(s => ({name: s})),
                exclude: excludeList.map(s => ({name: s})),
            }
        ],
        start,
        maxResults: Math.min(maxResults, MAX_PAPERS_SEARCH),
    });

    if (saveSearch) {
        // TODO add only new searches
        const userId = req.user._id;
        const viewedPapers = resultPapers.map(item => item.id);
        try {
            const papers = await resultPapers.map(formatPaper);
            const data = await UserModel.addSearch(userId, includeList, excludeList, viewedPapers, searchName);
            await updatePapersQueue.add({userId, searchId: data.search.id}, {repeat: {cron: '* * * * *'}});
            return res.status(HttpStatus.CREATED).json({search: data.search, papers});

        } catch (err) {
            next(err);
        }
    }

    res.json({papers: resultPapers.map(formatPaper)});
}

async function getCategories(req, res, next) {
    const userId = req.user._id;

    try {
        const userPapers = await UserModel.getCategories(userId);
        return res.json(userPapers);
    } catch (err) {
        next(err);
    }
}

async function savePaper(req, res, next) {
    const {paper, categoryId} = req.body;
    const userId = req.user._id;

    try {
        const data = await UserModel.addPaper(userId, categoryId, paper);
        return res.status(HttpStatus.CREATED).json(data.paper);
    } catch (err) {
        next(err);
    }
}

async function removePaper(req, res, next) {
    const {paperId, categoryId} = req.body;
    const userId = req.user._id;

    try {
        const data = await UserModel.removePaper(userId, categoryId, paperId);
        return res.status(HttpStatus.CREATED).json(data.paperId);
    } catch (err) {
        next(err);
    }
}


module.exports = {getCategories, searchPapers, savePaper, removePaper};
