import React from 'react';
import mongoose from 'mongoose';
import arxiv from 'arxiv-api';
import serverConfig from '../../server/configs/serverConfig';
import {getUpdatePapersQueue} from '../../server/services/updateQueueService';
import {MAX_PAPERS_SEARCH} from "../../server/paper/constants";

const updatePapersQueue = getUpdatePapersQueue();
mongoose.connect(serverConfig.mongo.hostUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

import SearchModel from '../../server/search/model';
import UserModel from '../../server/user/user.model';
import {sendEmail} from "./services/sendEmail";
import {renderEmail} from "react-html-email";
import PaperList from "./components/PaperList";

console.info(`Worker is running!!`);
updatePapersQueue.process('searches', async (job) => {
    const {searchId, userId} = job.data;
    const searchItem = await SearchModel.getSearchById(searchId, userId);
    const {include_tags: includeList = [], exclude_tags: excludeList = [], viewed_papers: viewedPapers, search_name: searchName} = searchItem;
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

    if (newPapers.length > 0) {
        const user = await UserModel.findById(userId);

        if(user) {
            sendEmail({
                to: user.email,
                subject: `new papers were found for search "${searchName}"`,
                html: renderEmail(<PaperList papers={newPapers}/>),
                callback: error => {
                    if (error) {
                        console.error("Failed to send email", error);
                    }
                }
            });

            await SearchModel.addNewPapers(searchId, newPapers.map(p => p.id));
            // TODO add to views papers
        } else {
            console.log("can't find user id: ", userId);
        }

    }

    // if users delete search (in the UI), we should remove the cron job of the update
    console.log('finish job');
});


process.on('SIGTERM', async () => {
    console.info('SIGTERM signal received.');
    await updatePapersQueue.close();
    mongoose.connection.close();
});
