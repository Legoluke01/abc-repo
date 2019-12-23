const ytdl = require("ytdl-core");
const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
    if (!message.member.voiceChannel) return message.reply("Please connect to a voice channel first.");
    if (message.guild.me.voiceChannel) return message.reply("Im already connected to a voice channel.")

    if (!args[0]) return message.reply("Please input a url after the command.")

    let validate = await ytdl.validateURL(args[0]);

    if (!validate) return message.reply("Please input a valid URL.")

    let info = await ytdl.getInfo(args[0]);

    let connection = await message.member.voiceChannel.join();

    let dispatcher = await connection.playStream(ytdl(args[0], { filter: 'audioonly' }));

    const settings = client.getSettings(message.guild)
    
    const embed = new Discord.RichEmbed()
    .setColor(settings.embedColor)
    .setTitle("Queue Updated")
    .addField("Song Title", info.title)
    .addField("Video ID", info.video_id)
    .addField("Duration (Seconds)", info.length_seconds)
    .addField("Requested By", message.author.username + "#" + message.author.discriminator)
    .addField("Guild Name", message.guild.name)
    .setFooter("ABC Music")
    .setTimestamp()
    message.channel.send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['p', 'pmusic'],
    permLevel: "User"
}

exports.help = {
    name: "play",
    category: "Music",
    description: "Play some music! [Only with a youtube vid link]",
    usage: "play [youtube url]"
}