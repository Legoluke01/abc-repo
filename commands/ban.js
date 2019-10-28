const Discord = require("discord.js");


exports.run = async (client, message, args, level) => {
          const settings = client.getSettings(message.guild);
        const logging_channel = message.guild.channels.find(c => c.name === settings.modLogChannel); 

        
let timeVar = new Date(Date.now()); // this should be able to work...

    const member = await message.mentions.members.first() || await message.guild.members.get(args[0])
    if (!member) return message.reply('Did you use an actual user? I cannot ban a fake one.');
    const reason = args.slice(1).join(" ");
 




    if (!message.guild.me.hasPermission('BAN_MEMBERS') || !member.bannable) { // error here with "bannable" can't read it
        return message.channel.send('Please make sure I have permission to ban and that the user is bannable.')
    }

    member.ban(reason)
    message.react("✅")
.then(function() {
    return logging_channel.send(`= MEMBER BANNED =\nUsername: ${member.user.username}#${member.user.discriminator}\nID: ${member.user.id}\nTime & Date: ${new Date(Date.now())}\nReason: ${reason}`, {code: "asciidoc", split: { char: "\u200b" }})
    })

// if their is no logging channel i want it to send it in the same channel as the message was made



//

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["bean", "eliminate"],
    permLevel: "Administrator"
}

exports.help = {
    name: "ban", 
    category: "Moderation",
    description: "Ban people.",
    usage: "ban @user [reason] | MAKE SURE YOU HAVE MOD LOGS SET UP!!!!!"
}