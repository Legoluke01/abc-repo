exports.run = async (client, message, args, level) => {

    const settings = client.getSettings(message.guild);

    if (settings.levelingEnabled === "true") {

  const filtered = client.points.filter( p => p.guild === message.guild.id ).array();

  const sorted = filtered.sort((a, b) => b.points - a.points);

  const top10 = sorted.splice(0, 10);

  const settings = client.getSettings(message.guild)

  const embed = new Discord.RichEmbed()
    .setTitle("Leaderboard")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription("Our top 10 points leaders!")
    .setColor(settings.embedColor);
  for(const data of top10) {
    embed.addField(client.users.get(data.user).tag, `${data.points} points (level ${data.level})`);
  }
  return message.channel.send({embed});
    } else {
        message.reply("Please enable leveling for this command to work.")
    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["leaders", "levels"],
    permLevel: "User"
}

exports.help = {
    name: "leaderboard",
    category: "Leveling",
    description: "See the leaderboard for this server. Only shows the top 10.",
    usage: "leaderboard"
}