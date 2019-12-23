const request = require("request");
const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  request({ uri: "https://dog-api.kinduff.com/api/facts", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send(`🐶 **Did you know?** ${body.facts[0]}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["doggofact"],
  permLevel: "User"
};

exports.help = {
  name: "dogfact",
  category: "Entertainment",
  description: "Gives you a fact about doggos",
  usage: "dogfact"
};
