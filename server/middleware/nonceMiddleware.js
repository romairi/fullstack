const {v4: uuidv4} = require('uuid');

function nonceMiddleware(req, res, next) {
    res.locals.styleNonce = new Buffer(uuidv4()).toString('base64');
    res.locals.scriptNonce = new Buffer(uuidv4()).toString('base64');
    next();
}

module.exports = nonceMiddleware;
