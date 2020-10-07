const helmet = require('helmet');
const limiter = require('./configs/securityConfig');


const securityMiddleware = app => {
    app.use(helmet({contentSecurityPolicy: false,}));
    app.use(limiter);
};

module.exports = securityMiddleware;
