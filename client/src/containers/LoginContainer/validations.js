import Joi from "@hapi/joi";
import {EMAIL_FIELD, EMAIL_VALID_NAMES, PASSWORD_FIELD} from "./constants";

export const schemaLogin = Joi.object({
    [EMAIL_FIELD]: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: EMAIL_VALID_NAMES } })
        .required(),
    [PASSWORD_FIELD]: Joi.string()
        .min(7)
        .required(),
});
