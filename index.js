const express = require('express');
const mongoose = require('mongoose');
const serverConfig = require('./server/configs/serverConfig');
const middleware = require('./server/middleware');
const Bull = require('bull');

const app = express();

(async function() {

    const myFirstQueue = new Bull('my-first-queue', serverConfig.redis.uri);

    // const job = await myFirstQueue.add({
    //     foo: 'roman'
    // });
    // const a =2;

    myFirstQueue.process(async (job) => {
        return console.log("ELIOR", job.data);
    });

})()



mongoose.connect(serverConfig.mongo.hostUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

middleware(app);

app.listen(serverConfig.port, () => console.log(`Example app listening on port ${serverConfig.port}!`));
