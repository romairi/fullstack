const jwt = require('jsonwebtoken');
const UserModel = require('./user.model');
const serverConfig = require('../configs/serverConfig');

async function auth(req, res, next) {
    const {token} = req.cookies;
    let authenticated = false;
    let user = null;
    if (token) {
        try {
            const {_id: userId, hash} = jwt.verify(token, serverConfig.jwt.secret);
            if (hash === req.fingerprint.hash) {    
                const userObj = await UserModel.getUserById(userId);
                if(userObj !== null){
                    const {password: userPass, ...useArgs} = userObj.toObject();
                    user = useArgs;
                    authenticated = true;
                } else {
                    res.clearCookie('token');
                }
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


module.exports = {
    auth,
};
