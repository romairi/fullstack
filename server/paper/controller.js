const _ = require('lodash');
const HttpStatus = require('http-status-codes');
const arxiv = require('arxiv-api');
const {papers} = require('./mocks');
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
    res.json(papers);
}

async function savePaper(req, res, next) {
    const {paper} = req.body;
    const userId = req.user._id;

    try {
        const user = await UserModel.findById(userId).populate('paperItems');
        console.log(user);
        user.addPaper();

    } catch (err) {

    }
}


module.exports = {getPapers, searchPapers, savePaper};
