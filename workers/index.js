const mongoose = require('mongoose');
const {formatPaper} = require("../server/services/formatPaper");
const arxiv = require('arxiv-api');
const serverConfig = require('../server/configs/serverConfig');
const workerConfig = require('../server/configs/workerConfig');
const {getUpdatePapersQueue} = require('../server/services/updateQueueService');
const {MAX_PAPERS_SEARCH} = require("../server/paper/constants");
const nodemailer = require("nodemailer");
const React = require('react');
const { Email, Item, A, renderEmail } = require('react-html-email');

function InlineLink({name, children}) {
    return (
        <Email title='link'>
            <Item>
                Hello {name}
                <A style={{ paddingLeft: 10 }}  href='https://mailtrap.io'>Click me!</A>
            </Item>
        </Email>
    )};


const updatePapersQueue = getUpdatePapersQueue();
mongoose.connect(serverConfig.mongo.hostUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const SearchModel = require('../server/search/model');

console.info(`Worker is running!!`);
updatePapersQueue.process(async (job) => {
    const {searchId, userId} = job.data;
    const searchItem = await SearchModel.getSearchById(searchId, userId);
    const {include_tags: includeList=[], exclude_tags: excludeList=[], viewed_papers: viewedPapers} = searchItem;
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

    const paper = newPapers[0];
    // const html = `
    //     <h3>${paper.title}</h3>
    //     <p>${paper.summary}</p>
    // `;
    const html = renderEmail(<InlineLink name='Roman' />);

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
        subject: "TEST TITLE",
        html
    };
    smtpTransport.sendMail(mailOptions,
        (error, response) => {
            if (error) {
                console.error("Failed to send email", error);
            }
            smtpTransport.close();
        });

    // TODO add to views papers

    // if users delete search (in the UI), we should remove the cron job of the update

    console.log(viewedPapersMap);
    console.log(newPapers);
    console.log('finish job');
});


process.on('SIGTERM', async () => {
    console.info('SIGTERM signal received.');
    await updatePapersQueue.close();
    mongoose.connection.close();
});
