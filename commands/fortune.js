const request = require("request");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  request({ uri: "http://www.yerkee.com/api/fortune", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send(body.fortune);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "fortune",
  category: "Entertainment",
  description: "Gives you your fortune",
  usage: "fortune"
};

