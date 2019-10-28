const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    const embed = new Discord.RichEmbed();
    embed.setColor("GREEN");
    embed.setTitle("Developers & Contributors");
    embed.setDescription("Thanks to the following people for helping make ABC what it is today.");
    embed.addField("Developers", `${client.users.get("317098359116529666").tag} - Head Developer\n${client.users.get("634273068163792897").tag} - Developer\n${client.users.get("615612894926733388").tag} - Developer`);
    embed.addField("Contributors", `${client.users.get("127888387364487168").tag} - Contributor`)
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
  