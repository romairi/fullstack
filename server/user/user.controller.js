const _ = require('lodash');
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
const {validateValues} = require('../services/validateValuesService');
const {loginSchema, signupSchema} = require('./user.validation');


async function signup(req, res, next) {

    const {errors} = validateValues(req, signupSchema);

    if (!(_.isEmpty(errors))) {
        res.status(HttpStatus.BAD_REQUEST).json(errors);
        return;
    }

    const {name, email, password} = req.body;

    try {

        const foundUser = await UserModel.findOne({email});
        if (foundUser) {
            res.status(HttpStatus.BAD_REQUEST).json({type: 'error', message: ERROR_EMAIL_EXIST_MESSAGE});
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({name, email, password: hashedPassword});
        const user = await newUser.save();

        const token = jwt.sign({_id: user._id}, serverConfig.jwt.secret, {expiresIn: TOKEN_EXPIRATION_TIME});
        const {password: userPass, ...userArgs} = user.toObject();

        res
            .cookie('token', token, {
                expires: new Date(Date.now() + COOKIE_EXPIRATION_TIME), // 24 X 60 X 60 X 1000
                secure: false, //TODO change it when we move to ssl
                httpOnly: true,
            })
            .json(userArgs);

    } catch (error) {
        next(error);
    }

}

async function login(req, res, next) {

    const {errors} = validateValues(req, loginSchema);

    if (!(_.isEmpty(errors))) {
        res.status(HttpStatus.BAD_REQUEST).json(errors);
        return;
    }

    const {email, password} = req.body;

    try {
        const user = await UserModel.findOne({email});
        if (!user) {
            res.status(HttpStatus.BAD_REQUEST).json({type: 'error', message: ERROR_MESSAGE});
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(HttpStatus.BAD_REQUEST).json({type: 'error', message: ERROR_MESSAGE});
        }

        const token = jwt.sign({_id: user._id}, serverConfig.jwt.secret, {expiresIn: TOKEN_EXPIRATION_TIME});
        const {password: userPass, ...userArgs} = user.toObject();

        res
            .cookie('token', token, {
                expires: new Date(Date.now() + COOKIE_EXPIRATION_TIME), // 24 X 60 X 60 X 1000
                secure: false, //TODO change it when we move to ssl
                httpOnly: true,
            })
            .json(userArgs);

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