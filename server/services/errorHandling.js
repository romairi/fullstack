const {ValidationError} = require("express-validation");
const HttpStatus = require('http-status-codes');

function validationError(err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
    }

    return next(err);
}

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({error: 'Something failed!'});
    } else {
        next(err);
    }
}

function errorHandler(err, req, res, next) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    res.send('500 Internal Server Error');
}

module.exports = {validationError, logErrors, clientErrorHandler, errorHandler};