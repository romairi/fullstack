import React from 'react';
import mongoose from 'mongoose';
import arxiv from 'arxiv-api';
import serverConfig from '../../server/configs/serverConfig';
import {KueService} from '../../server/services/queueService';
import {MAX_PAPERS_SEARCH} from "../../server/paper/constants";
import SearchModel from '../../server/search/model';
import UserModel from '../../server/user/user.model';
import {sendEmail} from "./services/sendEmail";
import {renderEmail} from "react-html-email";
import PaperList from "./components/PaperList";
import {SCHEDULE_TIME_JOB} from "../../server/search/constants";


mongoose.connect(serverConfig.mongo.hostUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


const updatePapersQueue = new KueService();
console.info(`Worker is running!!`);
updatePapersQueue.process('searches', 10, async (job, done) => {
    const {searchId, userId} = job.data;
    const searchItem = await SearchModel.getSearchById(searchId, userId);
    if (!searchItem) {
        console.log('Search item does not exists'); // TODO REMOVE ACTIVE JOB FROM THE QUEUE
        done();
        return;
    }
    const {
        include_tags: includeList = [],
        exclude_tags: excludeList = [],
        viewed_papers: viewedPapers,
        search_name: searchName
    } = searchItem;
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
        if (user) {
            sendEmail({
                to: user.email,
                subject: `New papers were found for the search "${searchName}"`,
                html: renderEmail(<PaperList papers={newPapers}/>),
                callback: error => {
                    if (error) {
                        console.error("Failed to send email", error);
                    }
                }
            });
            await SearchModel.addNewPapers(searchId, newPapers.map(p => p.id));
        } else {
            console.log("Can't find user-id: ", userId);
            //return done(new Error('Can't find user-id')); // TODO
        }

    }

    console.log('finish job');
    await updatePapersQueue.addItem('searches', {
            title: searchName,
            userId,
            searchId,
        }, {delay: SCHEDULE_TIME_JOB},
    );

    done();
});


process.on('SIGTERM', async () => {
    console.info('SIGTERM signal received.');
    await updatePapersQueue.close();
    mongoose.connection.close();
});
