# WI-NOTIFICATION
I2g simple notification package
## Build
```
npm version patch
npm publish
git push
```

## How to use

```
npm install @revotechuet/wi-notification@latest
```
### Init
```javascript
const wiNotification = require('./index');
let wiNoti = new wiNotification({
    "user": "smtpuser",
    "password": "smtppasswd",
    "telegram": {
        "bot_token": "bot:token",
        "chat_id": "123456789"
    }
});
```
### Email

```javascript
wiNoti.sendMail({
    to: "buidanghoang@gmail.com",
    messageHtml: "this is html <b>CONTENT</b>",
    subject: "Hello"
});
```

### Telegram
```javascript
wiNoti.sendTelegramMessage({
    text: "This is test text"
})
```
### Slack
```javascript
wiNoti.sendSlackMessage({
    
})
```
