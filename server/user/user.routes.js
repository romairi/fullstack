const express = require('express');
const {signup, login, logout} = require('./user.controller');
const router = express.Router();
const {
    loginValidation,
    signupValidation
} = require('./user.validation');

router.post('/signup', signupValidation,  signup);
router.post('/login', loginValidation, login);
router.get('/logout', logout);

module.exports = router;