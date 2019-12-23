const Discord = require('discord.js');
const fs = require("fs")
let blacklist = JSON.parse(fs.readFileSync("../JSON_DATA/blacklist.json", "utf8"));


exports.run = async (client, message, args, level) => {
    const blChannel = client.channels.find(c => c.name === "blacklist-log")


    if (!args || args.length < 1) return message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Please mention a user and allow/deny to (un)blacklist someone.")
    const mentioned = message.mentions.members.first()
    let reasonARG = args.slice[1].split(" ")

    if (!reasonARG) {reasonARG = "No reason."}

    let blacklist = JSON.parse(fs.readFileSync("../JSON_DATA/blacklist.json", "utf8"));
    if (message.content.includes("allow")) { 

        const removeBLembed = new Discord.RichEmbed()
        .setTitle("USER REMOVED FROM BLACKLIST")
        .setDescription(`<@${message.author.id}> just unblacklisted ${mentioned.user.tag}`)
        .addField(`Username:`, mentioned.user.tag, true)
        .addField("ID:", mentioned.user.id, true)
        .addField(`Reason:`, reasonARG)
        .setTimestamp()
        .setThumbnail(mentioned.user.avatarURL);

        blacklist[mentioned.user.id] = {
            status: "allowed",
            reason: reasonARG
        };
        fs.writeFile("../JSON_DATA/blacklist.json", JSON.stringify(blacklist), (err) => {
            if (err) console.log(err);
        });
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + "Gave " + `${args[0]}` + " access to ABC.");
        blChannel.send(removeBLembed)
    }
    if (message.content.includes("deny")) { 
        const addBLembed = new Discord.RichEmbed()
        .setTitle("USER ADDED TO BLACKLIST")
        .setDescription(`<@${message.author.id}> just blacklisted ${mentioned.user.tag}`)
        .addField(`Username:`, mentioned.user.tag, true)
        .addField("ID:", mentioned.user.id, true)
        .addField(`Reason:`, reasonARG)
        .setTimestamp()
        .setThumbnail(mentioned.user.avatarURL);


        blacklist[mentioned.user.id] = {
            status: "denied",
            reason: reasonARG
        };
        fs.writeFile("../JSON_DATA/blacklist.json", JSON.stringify(blacklist), (err) => {
            if (err) console.log(err)
        });
        message.channel.send("**/" + message.guild + "/" + message.channel.name + "/** \n  " + `Denied ` + `${args[0]}` + " access to ABC.");
        blChannel.send(addBLembed)
    }

}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["blacklist", "disable"],
    permLevel: "Bot Owner"
}

exports.help = {
    name: "botban",
    description: "Make it so a user can't use this bot.",
    usage: "botban [userID or guildID] reason",
    category: "System"
}