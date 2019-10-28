exports.run = async (client, message, args, level) => {
    const settings = client.getSettings(message.guild);

    if (settings.levelingEnabled === "true") {

    if(message.author.id !== message.guild.ownerID) 
    return message.reply("You're not the boss of me, you can't do that!");

  const user = message.mentions.users.first() || client.users.get(args[0]);
  if(!user) return message.reply("You must mention someone or give their ID!");

  const pointsToAdd = parseInt(args[1], 10);
  if(!pointsToAdd) 
    return message.reply("You didn't tell me how many points to give...")

  client.points.ensure(`${message.guild.id}-${user.id}`, {
    user: message.author.id,
    guild: message.guild.id,
    points: 0,
    level: 1
  });

  let userPoints = client.points.get(`${message.guild.id}-${user.id}`, "points");
  userPoints += pointsToAdd;
  

  client.points.set(`${message.guild.id}-${user.id}`, userPoints, "points")

  message.channel.send(`${user.tag} has received ${pointsToAdd} points and now stands at ${userPoints} points.`);
    } else {
        message.reply("Please enable leveling for this command to work.")
    }


}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["give"],
    permLevel: "Administrator"
}

exports.help = {
    name: "givepoints",
    category: "Leveling",
    description: "Give a user some points!",
    usage: "givepoints @user [number of points here]"
}