const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const settings = client.getSettings(message.guild)


const embed = new Discord.RichEmbed()
.setTitle("Statistics")
.setColor(settings.embedColor)
.addField("Mem Usage:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
.addField(`Uptime:`, duration, true)
.addField(`Total Users:`, client.users.size.toLocaleString(), true)
.addField(`Total Servers:`, client.guilds.size.toLocaleString(), true)
.addField(`Total Channels:`, client.channels.size.toLocaleString(), true)
.addField(`Discord.js Version:`, `v${Discord.version}`, true)
.addField(`Node Version:`, process.version, true);

message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "Miscelaneous",
  description: "Gives some useful bot statistics",
  usage: "stats"
};
