import workerConfig from "../../../server/configs/workerConfig";
import React from "react";
import {smtpTransport} from '../configs/mailerConfig';

const defaultMailOptions = {
    from: workerConfig.email.addr,
    replyto: workerConfig.email.addr,
};


export function sendEmail({callback, ...additionalOptions}) {
    smtpTransport.sendMail({
        ...defaultMailOptions,
        ...additionalOptions
    }, (error, response) => {
        callback(error, response);
        smtpTransport.close();
    });
}
