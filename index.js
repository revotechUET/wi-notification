const sendMail = require('./function/send-mail').sendMail;
const sendTelegram = require('./function/send-telegram').sendTelegram;

class wiNotification {
    constructor(config) {
        this.config = config
    }
    sendMail(options) {
        if (!this.config?.user) return console.log("No smtp user");
        if (!this.config?.password) return console.log("No smtp password");
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
    sendTelegramMessage(options) {
        if (!this.config?.telegram?.bot_token) return console.log("No bot token");
        if (!this.config?.telegram?.chat_id) return console.log("No chat id");
        if (!options.text) return console.log("No text");
        sendTelegram({
            text: options.text
        }, {
            telegram: {
                bot_token: this.config.telegram.bot_token,
                chat_id: this.config.telegram.chat_id
            }
        }, function (err, resp) {
            if (err) {
                console.log("Send notification telegram error ", err);
            } else {
                console.log("Send notification telegram done ", resp);
            }
        })
    }

    sendSlackMessage(options) {

    }
}

module.exports = wiNotification