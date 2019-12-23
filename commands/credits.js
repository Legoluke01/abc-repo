const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const embed = new Discord.RichEmbed();
    embed.setColor("GREEN");
    embed.setTitle("Developers & Contributors");
    embed.setDescription("Thanks to the following people for helping make ABC what it is today.");
    embed.addField("Developers", `${client.users.get("317098359116529666").tag} - Head Developer\n${client.users.get("127888387364487168").tag} - Developer\n${client.users.get("637718901127512074").tag} - The not active Developer`);
    message.channel.send(embed)
};
  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["devs", "credits"],
    permLevel: "User"
};
  
exports.help = {
    name: "credits",
    category: "Miscelaneous",
    description: "This returns some basic bot information, such as the Developers & Contributors.",
    usage: "credits",
 
};
  