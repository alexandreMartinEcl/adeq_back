const nodemailer = require('nodemailer');

//const url = "https://adeq.rezoleo.fr";
const url = "http://localhost:9000";

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
module.exports = {};

module.exports.checkAccountEmail = (email, token) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
/*
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
*/
        service: 'gmail',
        auth: {
            user: "guiguiguidenden@gmail.com", // generated ethereal user
            pass: "guiguiden" // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Adeqwacy" <guiguiguidenden@@gmail.com>', // sender address
        to: 'alexandre.martin.ecl@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Clique ici : ' + url + '/validate/?token=' + token, // plain text body
        html: '<a href="' + url + '/validate/?token=' + token + '">Clique ici</a>' // html body
    };

    // send mail with defined transport object
//    console.log(transporter.sendMail(mailOptions));

    return transporter.sendMail(mailOptions)
        .then((info) => {
            if (info.accepted.length == 0) {
                console.log(error);
                return {"success": false, "error": info};
            }
            console.log('Message sent: %s', info.messageId);
            return {"success": true};
        });

}