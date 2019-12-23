const Discord = require("discord.js");
const booru = require('booru');

exports.run = async (client, message, args, level) => {

    const settings = client.getSettings(message.guild)
    if (!message.channel.nsfw) {
        message.react('💢');
        return message.channel.send("This is not an nsfw channel!");
    }

    if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('That kind of stuff is not allowed! Not even in NSFW channels!');
var hentai = "sex"
    var query = "yaoi";
    booru.search('gelbooru', [query], {nsfw: true, limit: 1, random: true })
        .then(booru.commonfy)
        .then(images => {
            for (let image of images) {
                const embed = new Discord.RichEmbed()
                .setTitle("Hentai:")
                .setImage(image.common.file_url)
                .setColor(settings.embedColor)
                .setFooter(`Tags: ${query}`)
                .setURL(image.common.file_url);
                return message.channel.send({ embed });
            }
        }).catch(err => {
            if (err.name === 'booruError') {
                return message.channel.send(`No results found for **${query}**`);
            } else {
                return message.channel.send(`No results found for **${query}**`);
            }
})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["gayhentai"],
    permLevel: "User"
  };
  
  exports.help = {
    name: "yaoi",
    category: "NSFW",
    description: "Shows yaoi.",
    usage: "yaoi"
  };
  