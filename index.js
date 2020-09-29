const express = require('express');
const mongoose = require('mongoose');
const serverConfig = require('./server/configs/serverConfig');
const middleware = require('./server/middleware');
const kue = require('kue');

require('dotenv').config();

const app = express();


mongoose.connect(serverConfig.mongo.hostUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use('/kue-api/', kue.app);

middleware(app);


app.listen(serverConfig.port, () => console.log(`app listening on port ${serverConfig.port}!`));
