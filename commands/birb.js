const Discord = require("discord.js");
const request = require("request");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  request({ uri: "http://shibe.online/api/birds", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.send({
      files: [{
        attachment: body[0],
        name: "bird.png"
      }]
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bird", "birdpic"],
  permLevel: "User"
};

exports.help = {
  name: "birb",
  category: "Entertainment",
  description: "Gives you a random birb",
  usage: "birb"
};
