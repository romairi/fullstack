const HttpStatus = require('http-status-codes');
const SearchModel = require('./model');

async function saveLastSearch(req, res, next) {
    // const {includeList, excludeList, start, maxResults} = req.body;
    //
    // const resultPapers = await arxiv.search({
    //     searchQueryParams: [
    //         {
    //             include: includeList.map(s => ({name: s})),
    //             exclude: excludeList.map(s => ({name: s})),
    //         }
    //     ],
    //     start,
    //     maxResults: Math.min(maxResults, 30),
    // });
    //
    // res.json(resultPapers.map(formatPaper));
}

module.exports = {saveLastSearch};
