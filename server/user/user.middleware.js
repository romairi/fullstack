const jwt = require('jsonwebtoken');
const HttpStatus = require('http-status-codes');
const UserModel = require('./user.model');
const serverConfig = require('../configs/serverConfig');

async function auth(req, res, next) {
    const {token} = req.cookies;
    let authenticated = false;
    let user = null;
    if (token) {
        try {
            const {_id: userId, hash} = jwt.verify(token, serverConfig.jwt.secret);

            console.log(hash, req.fingerprint.hash);
            if (hash === req.fingerprint.hash) {
                const userObj = await UserModel.findById(userId);
                const {password: userPass, ...useArgs} = userObj.toObject();
                user = useArgs;
                authenticated = true;
            } else {
                res.clearCookie('token');
                // TODO add log about attempt to login with different fingerprint
            }
        } catch (err) {
            console.log(err);
        }
    }

    req.authenticated = authenticated;
    req.user = user;

    next();
}

function privateMiddleware(req, res, next) {
    if (req.authenticated) {
        next();
    } else {
        res.status(HttpStatus.FORBIDDEN).send('forbidden');
    }
}

module.exports = {
    auth,
    privateMiddleware,
};