const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
    message.channel.send("I'm a test command!")
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "test",
    category: "System",
    description: "Command Template File",
    usage: "test"
  };
  