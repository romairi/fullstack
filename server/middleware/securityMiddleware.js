const helmet = require('helmet');
// const limiter = require('./configs/securityConfig');

const defaultSrc = ["'self'", 'localhost:3000'];
const securityMiddleware = app => {
    app.use(helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc,
                scriptSrc: [...defaultSrc, (req, res) => `'nonce-${res.locals.scriptNonce}'`],
                styleSrc: [...defaultSrc, 'fonts.googleapis.com', 'stackpath.bootstrapcdn.com',
                    function (req, res) {
                        return "'nonce-" + res.locals.styleNonce + "'";
                    }],
                fontSrc: [...defaultSrc, 'fonts.gstatic.com', 'stackpath.bootstrapcdn.com'],
                connectSrc: [...defaultSrc, 'ws://localhost:3000']
            }
        }
    })

// app.use(limiter);
    )
};

module.exports = securityMiddleware;
