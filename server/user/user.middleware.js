const jwt = require('jsonwebtoken');
const HttpStatus = require('http-status-codes');
const UserModel = require('./user.model');
const serverConfig = require('../configs/serverConfig');

async function auth(req, res, next) {
    //Get token from header
    // const token = req.header('x-auth-header');
    const {token} = req.cookies;
    let authenticated = false;
    let user = null;

    if (token) {
      try {
          const decodedToken = jwt.verify(token, serverConfig.jwt.secret);
          const userId = decodedToken._id;
          const userObj = await UserModel.findById(userId);
          const {password: userPass, ...useArgs} = userObj.toObject();
          user = useArgs;
          authenticated = true;

      } catch (err) {
          //return res.status(HttpStatus.UNAUTHORIZED).json({msg: 'Token is not valid'});
          return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({msg: 'Server error'});
      }
    }

    req.authenticated = authenticated;
    req.user = user;

    next();
}

module.exports = {
    auth,
};