const {Joi} = require('joi');
const  {CONFIRM_PASSWORD_FIELD, EMAIL_FIELD, PASSWORD_FIELD, USER_NAME_FIELD} = require('./constants');

const loginSchema = Joi.object({
    [EMAIL_FIELD]: Joi.string()
        .email()
        .required(),
    [PASSWORD_FIELD]: Joi.string()
        .regex(/[a-zA-Z0-9]{7,200}/)
        .required(),
});


const signupSchema = Joi.object({
    [USER_NAME_FIELD]: Joi.string().required(),
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .regex(/[a-zA-Z0-9]{7,200}/)
        .required(),
    [CONFIRM_PASSWORD_FIELD]: Joi.any().valid(Joi.ref([PASSWORD_FIELD])).required()
});


module.exports = {
    loginSchema,
    signupSchema
};

