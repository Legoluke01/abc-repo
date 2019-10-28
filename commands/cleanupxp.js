exports.run = async (client, message, args, level) => {
    const settings = client.getSettings(message.guild);

    if (settings.levelingEnabled === "true") {
        const filtered = client.points.filter( p => p.guild === message.guild.id );

        const rightNow = new Date();
        const toRemove = filtered.filter(data => {
          return !message.guild.members.has(data.user) || rightNow - 2592000000 > data.lastSeen;
        });
    
        toRemove.forEach(data => {
          client.points.delete(`${message.guild.id}-${data.user}`);
        });
    
        message.channel.send(`I've cleaned up the levels of ${toRemove.size} unactive users from this server.`);
    } else {
        message.reply("Please enable leveling for this command to work.")
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["purgelevels", "cleanup"],
    permLevel: "Administrator"
}

exports.help = {
    name: "cleanupxp",
    category: "Leveling",
    description: "Reset all the levels for people that havent been online for a month.",
    usage: "cleanupxp"
}