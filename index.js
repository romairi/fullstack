const express = require('express');
const mongoose = require('mongoose');
const serverConfig = require('./server/configs/serverConfig');
const middleware = require('./server/middleware');
require('dotenv').config();

console.log(process.env);

const app = express();

mongoose.connect(serverConfig.mongo.hostUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

middleware(app);

app.listen(serverConfig.port, () => console.log(`Example app listening on port ${serverConfig.port}!`));
