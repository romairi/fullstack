const {Joi} = require('express-validation');
const {CONFIRM_PASSWORD_FIELD, EMAIL_FIELD, PASSWORD_FIELD, USER_NAME_FIELD, EMAIL_VALID_NAMES} = require('./constants');

const login = {
    body: Joi.object({
        [EMAIL_FIELD]: Joi.string()
            .email({minDomainSegments: 2, tlds: {allow: EMAIL_VALID_NAMES}})
            .required(),
        [PASSWORD_FIELD]: Joi.string()
            .min(7)
            .required(),
    }),
};

const signup = {
    body: Joi.object({
        [USER_NAME_FIELD]: Joi.string()
            .alphanum()
            .min(3)
            .max(15)
            .required(),

        [EMAIL_FIELD]: Joi.string()
            .email({minDomainSegments: 2, tlds: {allow: EMAIL_VALID_NAMES}})
            .required(),
        [PASSWORD_FIELD]: Joi.string()
            .min(7)
            .required(),
        [CONFIRM_PASSWORD_FIELD]: Joi.ref(PASSWORD_FIELD),
    }),
};


module.exports = {
    login,
    signup
};

