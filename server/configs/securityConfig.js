const rateLimit = require("express-rate-limit");

const MAX_REQUESTS = 100;
const TIME_RANGE = 15 * 60 * 1000;

const limiter = rateLimit({
    windowMs: TIME_RANGE,
    max: MAX_REQUESTS
});

module.exports = limiter;
