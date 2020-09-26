const Bull = require('bull');
const {redis} = require('../configs/serverConfig');

const UPDATE_PAPERS_QUEUE_NAME = 'UPDATE_PAPERS';

const defaultJobOptions = {
    removeOnComplete: true,
    removeOnFail: false,
};

const limiter = {
    max: 10000,
    duration: 1000,
    bounceBack: false,
};

const getUpdatePapersQueue = () => new Bull(UPDATE_PAPERS_QUEUE_NAME, redis.uri, {defaultJobOptions, limiter});

module.exports = {getUpdatePapersQueue, UPDATE_PAPERS_QUEUE_NAME};
