import Joi from "@hapi/joi";
import {EMAIL_FIELD, PASSWORD_FIELD} from "../SignUpContainer/constants";

export const schemaLogin = Joi.object({
    [EMAIL_FIELD]: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "ru", "co.il"] } })
        .required(),
    [PASSWORD_FIELD]: Joi.string()
        .min(7)
        .required(),
});
