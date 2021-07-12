const sendMail = require('./function/send-mail').sendMail;

class wiNotification {
    constructor(config) {
        this.config = config
    }
    sendNotification(options) {
        if (!options.to) return console.log("No destination email");
        if (!options.messageHtml) return console.log("No message");
        if (!options.subject) return console.log("No subject");
        sendMail({
            from: "no-reply@i2g.cloud",
            to: options.to,
            subject: options.subject,
            html: options.messageHtml
        }, {
            "Smtp": {
                "user": this.config.user,
                "password": this.config.password
            }
        }, function (err, resp) {
            if (err) {
                console.log("Send notification email error ", err);
            } else {
                console.log("Send notification mail done ", resp);
            }
        })
    }
}

module.exports = wiNotification