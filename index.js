const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const todoItemRoutes = require('./server/todoItem/todoItem.route');
const serverConfig = require('./server/configs/serverConfig');
const {logErrors, clientErrorHandler, errorHandler} = require('./server/services/errorHandling');

const app = express();

mongoose.connect(serverConfig.mongo.hostUri, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());
app.use('/static', express.static(path.join(__dirname + '/client/build/static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use('/api/todo_item', todoItemRoutes);
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(serverConfig.port, () => console.log(`Example app listening on port ${serverConfig.port}!`));