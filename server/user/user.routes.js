const express = require('express');
const {validate} = require('express-validation');
const {signup, login, logout} = require('./user.controller');
const router = express.Router();
const paramValidation = require('./user.validation');

router.post('/signup', validate(paramValidation.singup), signup);
router.post('/login', validate(paramValidation.login), login);
router.get('/logout', logout);

module.exports = router;