const nodemailer = require('nodemailer');
const config = require('../config');

//const url = "https://adeq.rezoleo.fr";
const url = config.BASE_URL;

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
            user: config.adminEmail, // generated ethereal user
            pass: config.adminPsswd // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Adeqwacy" <' + config.adminEmail + '>', // sender address
        to: email, // list of receivers
        subject: 'Validation du compte Adeqwacy', // Subject line
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