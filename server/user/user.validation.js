const {validate, ValidationError, Joi} = require('express-validation');
const {CONFIRM_PASSWORD_FIELD, EMAIL_FIELD, PASSWORD_FIELD, USER_NAME_FIELD} = require('./constants');

const loginSchema = Joi.object({
    [EMAIL_FIELD]: Joi.string()
        .email({minDomainSegments: 2, tlds: {allow: ["com", "net", "ru", "co.il"]}})
        .required(),
    [PASSWORD_FIELD]: Joi.string()
        .min(7)
        .required(),
});


const signupSchema = Joi.object({
    [USER_NAME_FIELD]: Joi.string()
        .alphanum()
        .min(3)
        .max(15)
        .required(),

    [EMAIL_FIELD]: Joi.string()
        .email({minDomainSegments: 2, tlds: {allow: ["com", "net", "ru", "co.il"]}})
        .required(),
    [PASSWORD_FIELD]: Joi.string()
        .min(7)
        .required(),
    [CONFIRM_PASSWORD_FIELD]: Joi.ref(PASSWORD_FIELD),
});


module.exports = {
    loginSchema,
    signupSchema
};

