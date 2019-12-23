const yojokes = require("../JSONStorage/roast.json")

exports.run = async (client, message, args, level) => {
const rjoke = yojokes[Math.floor(Math.random() * yojokes.length)]
const mentioned = message.mentions.members.first() || message.author

if (mentioned.id === client.user.id) return message.reply("How dare you try to roast me with my own roasts!");
if (mentioned.id === client.config.ownerID) return message.reply("Why you trying to roast meh creator?")

message.delete()


if (mentioned.id === message.author.id) {
    message.reply(rjoke)
} else {

message.channel.send(`<@${mentioned.id}>, ` + rjoke)
}

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["insult"],
    permLevel: "User"
}

exports.help = {
    name: "roast",
    category: "Entertainment",
    description: "Roast yourself or someone.",
    usage: "roast [mention, or leave blank for yourself]"
}