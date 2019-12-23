const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args, level) => {
  const settings = client.getSettings(message.guild)
  let {body} = await superagent
  .get(`http://aws.random.cat/meow`)
  if(!body) return message.channel.send("Couldn't get the picture. Please try again.");

  let catembed = new Discord.RichEmbed()
  .setColor(settings.embedColor)
  .setTitle("Catto :cat:")
  .setImage(body.file)
  .setFooter(`Requested by ${message.author.tag}`);

  message.channel.send(catembed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["catpic", "cat"],
  permLevel: "User"
};

exports.help = {
  name: "catto",
  category: "Entertainment",
  description: "Gives you a random catto",
  usage: "catto"
};
