import nodemailer from "nodemailer";
import workerConfig from "../../../server/configs/workerConfig";

export const smtpTransport = nodemailer.createTransport({
    service: workerConfig.email.service,
    auth: {
        user: workerConfig.email.addr,
        pass: workerConfig.email.pass
    },
});
