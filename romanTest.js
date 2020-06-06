const arxiv = require('arxiv-api');
const fs = require('fs');

async function getPaper() {

    const papers = await arxiv.search({
        searchQueryParams: [
            {
                include: [{name: 'RNN'}, {name: 'Deep learning'}],
                exclude: [{name: 'LSTM'}],
            },
            {
                include: [{name: 'GAN'}],
            },
        ],
        start: 0,
        maxResults: 10,
    });

    fs.writeFileSync('paper_data.json', JSON.stringify(papers));
}

getPaper()
