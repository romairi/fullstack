const _ = require('lodash');
const HttpStatus = require('http-status-codes');
const arxiv = require('arxiv-api');
const {papers} = require('./mocks');

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


module.exports = {getPapers, searchPapers};
