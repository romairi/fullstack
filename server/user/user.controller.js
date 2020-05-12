const UserModel = require('./user.model');
const HttpStatus = require('http-status-codes');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const serverConfig = require('../configs/serverConfig');

async function signup(req, res, next) {
    const {name, email, password} = req.body;

    try {
        const foundUser = await UserModel.findOne({email});
        if(foundUser) {
            res.status(HttpStatus.BAD_REQUEST).json({type: 'error', message: 'email already in use'});
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({name, email, password: hashedPassword});
        const user = await newUser.save();

        const token = jwt.sign({_id: user._id}, serverConfig.jwt.secret, {expiresIn: '24h'});
        const {password: userPass, ...userArgs} = user.toObject();

        res
            .cookie('token', token, {
                expires: new Date(Date.now() + 86400000), // 24 X 60 X 60 X 1000
                secure: false, //TODO change it when we move to ssl
                httpOnly: true,
            })
            .json(userArgs);

    } catch (error) {
        next(error);
    }

}

function login(req, res, next) {
    //TODO

}

function logout(req, res, next) {
    if (req.authenticated) {
        res.clearCookie('token');
    }
    res.send('logout');
}

module.exports = {signup, login, logout};