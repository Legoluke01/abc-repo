const Discord = require("discord.js");
const ansewers = require("../JSONStorage/8-ball.json");

exports.run = async (client, message, args, level) => {

    const settings = client.getSettings(message.guild)

    if(!args[0]) return message.reply("I hope you know that I can't read your mind.");
    const answer  = ansewers[Math.floor(Math.random() * ansewers.length)]

    const embed = new Discord.RichEmbed().setTitle(answer).setThumbnail("http://simpleicon.com/wp-content/uploads/eight-ball.png").setColor(settings.embedColor);
    message.channel.send(embed)




}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "8ball",
    category: "Entertainment",
    description: "Ask the 8ball any yes or no question.",
    usage: "8ball [question]"
  };