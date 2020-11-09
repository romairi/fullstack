const helmet = require('helmet');
// const limiter = require('./configs/securityConfig');

const defaultSrc = ["'self'", 'localhost:3000', 'ajax.cloudflare.com'];
const securityMiddleware = app => {
    app.use(helmet({
        contentSecurityPolicy: {
            directives: {
                defaultSrc,
                scriptSrc: [...defaultSrc, (req, res) => (req.originalUrl === '/admin/kue-api/' ? "'unsafe-inline'" : `'nonce-${res.locals.scriptNonce}'`)],
                styleSrc: [...defaultSrc, 'fonts.googleapis.com', 'stackpath.bootstrapcdn.com',
                   (req, res) => {
                        return req.originalUrl === '/admin/kue-api/' ? "'unsafe-inline'" : "'nonce-" + res.locals.styleNonce + "'";
                    }],
                fontSrc: [...defaultSrc, 'fonts.gstatic.com', 'stackpath.bootstrapcdn.com', 'fonts.googleapis.com'],
                connectSrc: [...defaultSrc, 'ws://localhost:3000']
            }
        }
    })

// app.use(limiter);
    )
};

module.exports = securityMiddleware;
