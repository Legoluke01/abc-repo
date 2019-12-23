const request = require("request");
const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  request({ uri: "https://catfact.ninja/fact", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send(`🐱 **Did you know?** ${body.fact}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["meowfact"],
  permLevel: "User"
};

exports.help = {
  name: "catfact",
  category: "Entertainment",
  description: "Gives you a random cat fact",
  usage: "catfact"
};
