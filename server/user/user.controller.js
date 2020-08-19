const HttpStatus = require('http-status-codes');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('./user.model');
const serverConfig = require('../configs/serverConfig');
const {
    ERROR_MESSAGE,
    ERROR_EMAIL_EXIST_MESSAGE,
    TOKEN_EXPIRATION_TIME,
    COOKIE_EXPIRATION_TIME
} = require("./constants");

function loadUser(req, res, user) {
    const token = jwt.sign({_id: user._id, hash: req.fingerprint.hash},
        serverConfig.jwt.secret,
        {expiresIn: TOKEN_EXPIRATION_TIME});
    const {password: userPass, ...userArgs} = user.toObject();

    res
        .cookie('token', token, {
            expires: new Date(Date.now() + COOKIE_EXPIRATION_TIME), // 24 X 60 X 60 X 1000
            secure: false, //TODO change it when we move to ssl
            httpOnly: true,
        })
        .json(userArgs);
    return res;
}

async function signup(req, res, next) {
    const {username, email, password} = req.body;

    try {

        const foundUser = await UserModel.getUserByEmail(email);
        if (foundUser) {
            res.status(HttpStatus.BAD_REQUEST).json({type: 'error', message: ERROR_EMAIL_EXIST_MESSAGE});
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await UserModel.createUser({username, email, password: hashedPassword});

        return loadUser(req, res, user);

    } catch (error) {
        next(error);
    }

}

async function login(req, res, next) {
    const {email, password} = req.body;

    try {
        const user = await UserModel.getUserByEmail(email);
        if (!user) {
            res.status(HttpStatus.BAD_REQUEST).json({type: 'error', message: ERROR_MESSAGE});
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(HttpStatus.BAD_REQUEST).json({type: 'error', message: ERROR_MESSAGE});
        }

        return loadUser(req, res, user);

    } catch (err) {
        next(error);
    }

}

function logout(req, res, next) {
    if (req.authenticated) {
        res.clearCookie('token');
    }
    res.send('logout');
}

module.exports = {signup, login, logout};
