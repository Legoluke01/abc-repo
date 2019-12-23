const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {

    const settings = client.getSettings(message.guild)


const embed = new Discord.RichEmbed()
.setTitle("The Luxtar")
.setColor(settings.embedColor)
.setImage("https://cdn.discordapp.com/attachments/644711393920155648/644711558412369940/20191114_114314.jpg")
.setDescription("Luxtars are bird lizard hybrids with many forms but different traits depending on their environment; Try using some traits of a Luxtar and then make it how you'd wanna do it, as long as it's recognizable as a Luxtar.")
.setFooter("Drawing made by `{Snyder “Cohryne” Dráchynlicht}#9509`")

message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["lextar"],
    permLevel: "User"
}

exports.help = {
    name: "luxtar",
    category: "Other",
    description: "I don't even know.",
    usage: "luxtar"
}