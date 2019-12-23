const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args, level) => {
  const settings = client.getSettings(message.guild)

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  let dogembed = new Discord.RichEmbed()
  .setColor(settings.embedColor)
  .setTitle("Doggo :dog:")
  .setImage(body.url)
  .setFooter(`Requested by ${message.author.tag}`);

  message.channel.send(dogembed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dog", "dogpic", "doggopic"],
  permLevel: "User"
};

exports.help = {
  name: "doggo",
  category: "Entertainment",
  description: "Gives you a doggo pic.",
  usage: "doggo"
};
