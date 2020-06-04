const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const Fingerprint = require('express-fingerprint');
const routes = require('./routes');
const {auth} = require('./user/user.middleware');
const {validationError, logErrors, clientErrorHandler, errorHandler} = require('./services/errorHandling');

const middleware = app => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, './views'));

    app.use(Fingerprint({
        parameters: [
            Fingerprint.useragent,
        ],
    }));
    app.use(cookieParser());
    app.use(express.json());
    app.use('/static', express.static(path.join(__dirname + '/../client/build/static')));
    app.use('/', auth, routes);


    app.use(validationError);
    app.use(logErrors);
    app.use(clientErrorHandler);
    app.use(errorHandler);
};

module.exports = middleware;
