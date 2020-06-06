const _ = require('lodash');
const HttpStatus = require('http-status-codes');
const {papers} = require('./mocks');

async function getPapers(req, res, next) {
    res.json(papers);
}

async function fetchPapers(req, res, next) {

}

module.exports = {getPapers, fetchPapers};
