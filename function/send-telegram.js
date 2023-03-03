const axios = require("axios");

async function sendTelegram(data, config, callback) {
  const bot_token = config.telegram.bot_token;
  const chat_id = config.telegram.chat_id;
  const content = data.text;
  axios
    .get(
      `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${content}`
    )
    .then((res) => {
      console.log(res.data);
      callback(null, res.data);
    })
    .catch((err) => {
      console.log(err);
      callback(err, null);
    });
}

module.exports = { sendTelegram };
