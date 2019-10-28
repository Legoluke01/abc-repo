exports.run = async (client, message, args, level) => {

    const settings = client.getSettings(message.guild);

    if (settings.levelingEnabled === "true") {

    const key = `${message.guild.id}-${message.author.id}`;
    return message.channel.send(`You currently have ${client.points.get(key, "points")} points, and are level ${client.points.get(key, "level")}!`);
    } else {
        message.reply("Please enable leveling for this command to work.")
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["pts", "rank"],
    permLevel: "User"
}

exports.help = {
    name: "points",
    category: "Leveling",
    description: "See how many points and what your level is in this server.",
    usage: "points"
}