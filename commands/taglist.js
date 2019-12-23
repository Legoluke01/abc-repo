const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment")

exports.run = async (client, message, args, level) => {

    const settings = client.getSettings(message.guild)
    const resp = db.all().filter(data => data.ID.startsWith(`tags_${message.guild.id}`)).sort((a, b) => b.data - a.data);

    let i = 1;
  let content = undefined;

resp.forEach(resp => { 
let user = bot.users.find(m => m.id === resp.ID.split('_')[1])
if(user === null || undefined) user = "Unknown";
let content = `**\`${resp.data.name}\`** | **Created by: ** ${resp.data.createdby}\n`;
if (content === " ") {
    let content = "There are no tags on this server"
}
});  

    const embed = new Discord.RichEmbed()
      .setTitle(`**${message.guild.name}'s Tags**`)
      .setThumbnail(`${message.guild.iconURL}`)
      .setDescription(`${content || `**There are no tags on this server.**`}`)
      .setFooter(`Send **${settings.prefix}taginfo <tagname>** for Info`)
      .setColor(settings.embedColor)
    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["tl"],
    permLevel: "Administrator"
}

exports.help = {
    name: "taglist",
    category: "Tags",
    description: "Gives you the list of tags on your server",
    usage: "taglist"
}