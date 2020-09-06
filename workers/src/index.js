import React from 'react';
import mongoose from 'mongoose';
import arxiv from 'arxiv-api';
import serverConfig from '../../server/configs/serverConfig';
import workerConfig from '../../server/configs/workerConfig';
import {getUpdatePapersQueue} from '../../server/services/updateQueueService';
import {MAX_PAPERS_SEARCH} from "../../server/paper/constants";
import nodemailer from "nodemailer";
import {renderEmail} from 'react-html-email';
import PaperList from './components/PaperList';
import SearchModel from '../../server/search/model';

const updatePapersQueue = getUpdatePapersQueue();
mongoose.connect(serverConfig.mongo.hostUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


console.info(`Worker is running!!`);
updatePapersQueue.process(async (job) => {
    const {searchId, userId} = job.data;
    const searchItem = await SearchModel.getSearchById(searchId, userId);
    const {include_tags: includeList = [], exclude_tags: excludeList = [], viewed_papers: viewedPapers} = searchItem;
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
        // TODO send email - read about how to send email using nodejs, the email should include some info about the papers as following:
        // 1. card of papers: each card should include the paper's title and description (maybe some images if you want)

        const html = renderEmail(<PaperList papers={newPapers}/>);
        // const getUserEmail =

        // TODO extract mail function to a service
        const smtpTransport = nodemailer.createTransport({
            service: workerConfig.email.service,
            auth: {
                user: workerConfig.email.addr,
                pass: workerConfig.email.pass
            },
        });
        const mailOptions = {
            from: workerConfig.email.addr,
            replyto: workerConfig.email.addr,
            to: 'irinarhovr@gmail.com', // TODO get it from the user
            subject: "TEST TITLE", // TODO new paper for search (search name)
            html
        };
        smtpTransport.sendMail(mailOptions,
            (error, response) => {
                if (error) {
                    console.error("Failed to send email", error);
                }
                smtpTransport.close();
            });

        await SearchModel.addNewPapers(searchId, newPapers.map(p => p.id));
        // TODO add to views papers
    }

    // if users delete search (in the UI), we should remove the cron job of the update
    console.log('finish job');
});


process.on('SIGTERM', async () => {
    console.info('SIGTERM signal received.');
    await updatePapersQueue.close();
    mongoose.connection.close();
});
