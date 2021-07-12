const nodemailer = require('nodemailer');

function sendMail(data, config, callback) {
    data.fromAddress = data.fromAddress ? data.fromAddress : "no-reply@i2g.cloud";
    let transporter = nodemailer.createTransport({ // config mail server
        host: "email-smtp.us-east-1.amazonaws.com",
        port: "465",
        secure: true, // true for 465, false for other ports
        auth: {
            user: config.Smtp.user, // generated ethereal user
            pass: config.Smtp.password // generated ethereal password
        }
    });
    let mainOptions = {
        from: '"I2G Support Team" <' + data.from + '>',
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.html
    };
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            console.log('Message sent: ' + info.response);
            callback(null, info);
        }
    });
}

module.exports = { sendMail };