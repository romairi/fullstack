import Joi from "@hapi/joi";
import {EMAIL_FIELD, PASSWORD_FIELD} from "./constants";

export const schema = Joi.object({
    [EMAIL_FIELD]: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
    [PASSWORD_FIELD]: Joi.string()
    .min(7)
    .required(),
});