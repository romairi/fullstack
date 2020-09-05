// const nodemailer = require("nodemailer");
//
//
// function sentMail() {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'irinarhovr@gmail.com',
//             pass: 'shefik1991'
//         }
//     });
//
//     const mailOptions = {
//         from: 'irinarhovr@gmail.com',
//         to: 'irinarhovr@gmail.com',
//         subject: 'Node JS Test Mail',
//         text: 'This is test mail from node js application'
//     };
//
//     transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('Email sent:' + info.response);
//         }
//     });
// }
//
// // sentMail().catch(err => {
// //     console.error(err.message);
// //     process.exit(1);
// // });
//
// module.exports = sentMail;
