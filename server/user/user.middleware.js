const UserModel = require('./user.model');
const serverConfig = require('../configs/serverConfig');

async function auth(req, res, next) {
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