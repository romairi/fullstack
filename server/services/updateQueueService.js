const Bull = require('bull');
const {redis} = require('../configs/serverConfig');

const UPDATE_PAPERS_QUEUE_NAME = 'UPDATE_PAPERS';

const getUpdatePapersQueue = () => new Bull(UPDATE_PAPERS_QUEUE_NAME, redis.uri);

module.exports = {getUpdatePapersQueue, UPDATE_PAPERS_QUEUE_NAME};
