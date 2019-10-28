const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
    const member = message.mentions.members.first() || await message.guild.members.get(args[0]);
    if (!member) return message.reply(", where is this user you wanted to kick?");
    if (!message.guild.me.hasPermission('KICK_MEMBERS') || !member.kickable) return message.channel.send("I do not have the required perms.")
    let reason = args.slice(1).join(" ");
    const settings = client.getSettings(message.guild)
    let timeVar = new Date(Date.now());
    const logging_channel = message.guild.channels.find(c => c.name === settings.modLogChannel)

    if (!reason) {
        reason = "No reason given."
    }

    // oof we have to search for the channel

    if (settings.modLogChannel === "none") {
        member.kick(reason)
        message.react("✅")
        return message.channel.send(`= MEMBER KICKED =\nUser's Tag: ${member.user.tag}\nUser's ID: ${member.user.id}\nTime: ${timeVar}\nReason: ${reason}\nNEXT TIME PLEASE ADD A MOD LOG CHANNEL!!!!\nabc set edit modLogChannel [channelName]\nThis is case sensitive.`, {code: "asciidoc", split: { char: "\u200b" }})
    }

    member.kick(reason)
    message.react("✅")
    return logging_channel.send(`= MEMBER KICKED =\nUser's Tag: ${member.user.tag}\nUser's ID: ${member.user.id}\nTime: ${timeVar}\nReason: ${reason}`, {code: "asciidoc", split: { char: "\u200b" }})

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["getout"],
    permLevel: "Moderator"
}

exports.help = {
    name: "kick",
    category: "Moderation",
    description: "Yeet a user out of a server.",
    usage: "kick <user> [reason]"
}
//oh ok lemme see it