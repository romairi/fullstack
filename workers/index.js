const mongoose = require('mongoose');
const arxiv = require('arxiv-api');
const serverConfig = require('../server/configs/serverConfig');
const {getUpdatePapersQueue} = require('../server/services/updateQueueService');
const SearchModel = require('../server/search/model');
const {MAX_PAPERS_SEARCH} = require("../server/paper/constants");

const updatePapersQueue = getUpdatePapersQueue();
mongoose.connect(serverConfig.mongo.hostUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

console.info(`Worker is running`);
updatePapersQueue.process(async (job) => {
    const {searchId, userId} = job.data;
    const searchItem = await SearchModel.getSearchById(searchId, userId);
    const {include_tags: includeList, exclude_tags: excludeList, viewed_papers: viewedPapers} = searchItem;
    const viewedPapersMap = viewedPapers.reduce((acc, cur) => ({...acc, [cur]: true}), {});
    const resultPapers = await arxiv.search({
        searchQueryParams: [
            {
                include: includeList.map(s => ({name: s})),
                exclude: excludeList.map(s => ({name: s})),
            }
        ],
        start: 0,
        maxResults: MAX_PAPERS_SEARCH,
    });

    const newPapers = resultPapers.filter(paper => !viewedPapersMap[paper.id]);

    // TODO send email - read about how to send email using nodejs, the email should include some info about the papers as following:
    // 1. card of papers: each card should include the paper's title and description (maybe some images if you want)
    // TODO add to views papers

    // if users delete search (in the UI), we should remove the cron jub of the update

    console.log(viewedPapersMap);
    console.log(newPapers);
});


process.on('SIGTERM', async () => {
    console.info('SIGTERM signal received.');
    await updatePapersQueue.close();
    mongoose.connection.close();
});
