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
    "password": "smtppasswd"
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

})
```
### Slack
```javascript
wiNoti.sendSlackMessage({
    
})
```
