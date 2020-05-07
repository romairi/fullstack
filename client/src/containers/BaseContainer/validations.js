import Joi from "@hapi/joi";
import {EMAIL_FIELD, PASSWORD_FIELD, USER_NAME_FIELD, CONFIRM_PASSWORD_FIELD} from "../BaseContainer/constants";

export const schema = Joi.object({
    [EMAIL_FIELD]: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ru", "co.il"] } })
        .required(),
    [PASSWORD_FIELD]: Joi.string()
        .min(7)
        .required(),
});


export const schemaSign = Joi.object({
    [USER_NAME_FIELD]: Joi.string()
        .alphanum()
        .min(3)
        .max(15)
        .required(),

    [EMAIL_FIELD]: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ru", "co.il"] } })
        .required(),
    [PASSWORD_FIELD]: Joi.string()
        .min(7)
        .required(),
    [CONFIRM_PASSWORD_FIELD]: Joi.ref('password'),
});