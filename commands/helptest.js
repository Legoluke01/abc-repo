/*
The HELP command is used to display every command's name and description
to the user, so that he may see what commands are available. The help
command is also filtered by level, so if a user does not have access to
a command, it is not shown to them. If a command name is given with the
help command, its extended help is shown.
*/
const Discord = require("discord.js")

exports.run = (client, message, args, level) => {
  // If no specific command is called, show all filtered commands.
  const settings = client.getSettings(message.guild)
  if(!args[0]) {

    const helpembed = new Discord.RichEmbed()
    .setTitle("Commands")
    .setDescription("Thanks for using Abc! If you have any question or bug reports join our support server!")
    .setColor(settings.embedColor)
    .addField(`🎉 **Entertainment**`, `\`${settings.prefix}help cat entert\``, true)
    .addField(`📊 **Information**`, `\`${settings.prefix}help cat info\``, true)
    .addField(`✉️ **Leveling**`, `\`${settings.prefix}help cat level\``, true)
    .addField(`❓ **Miscellaneous**`, `\`${settings.prefix}help cat misc\``, true)
    .addField(`📜 **Tag System**`, `\`${settings.prefix}help cat tags\``, true)
    .addField(`<:banHammer:447098955004772353> **Moderation**`, `\`${settings.prefix}help cat mod\``, true)
    .addField(`🎵 **Music**`, `\`${settings.prefix}help cat music\``, true)
    .addField(`🖥️ **System**`, `\`${settings.prefix}help cat system\``, true)
    .addField(`<:blank:612740874119675914>`, `<:blank:612740874119675914>`, true)
    .setTimestamp()
    .setFooter(`Command ran by ${message.author.username}`)

    message.channel.send(helpembed)
    
 
  } else if(args[0] === "cat" || "category") {

    if(args[1] === "entert" || "entertainment") {
      const entertEmbed = new Discord.RichEmbed()
      .setTitle(`🎉 Entertainment Commands`)
      .setColor(settings.embedColor)
      .setDescription("`8ball, ascii, birb, catfact, catto, dadjoke, dogfact, doggo, fortune, lovetest, meme, roast`")
      .setFooter(`The following command are only part of the category Entertainment. For all commands please do \`abc help\`. For help on a spesific command please do \`abc help commandName\``)

      message.channel.send(entertEmbed)
    } else if(args[1] === "info" || "information") {
       
      const infoEmbed = new Discord.RichEmbed()
      .setTitle("📊 Informational Commands")
      .setColor(settings.embedColor)
      .setDescription(`\`The only command that belongs here is translate but its being worked on.\``)
      .setFooter("The following command are only part of the category Information. For all commands please do \`abc help\`. For help on a spesific command please do \`abc help commandName\`")
    message.channel.send(infoEmbed)
    } else if(args[1] === "level" || "leveling") {

      const levelEmbed = new Discord.RichEmbed()
      .setTitle("✉️ Leveling Commands")
      .setColor(settings.embedColor)
      .setDescription("`Still being worked on`")
      .setFooter("The following command are only part of the category Leveling. For all commands please do \`abc help\`. For help on a spesific command please do \`abc help commandName\`")

        message.channel.send(levelEmbed)

    } else if(args[1] === "miscellaneous" || "misc") {

      const miscEmbed = new Discord.RichEmbed()
      .setTitle("❓ Miscellaneous Commands")
      .setColor(settings.embedColor)
      .setFooter("The following command are only part of the category Leveling. For all commands please do \`abc help\`. For help on a spesific command please do \`abc help commandName\`")
      .setDescription("`credits, mylevel, ping, stats, luxtar`")

      message.channel.send(miscEmbed)

    } else if(args[1] === "tags") {

      const tagEmbed = new Discord.RichEmbed()
      .setTitle("📜 Tag System")
      .setColor(settings.embedColor)
      .setFooter("The following command are only part of the category Tags. For all commands please do \`abc help\`. For help on a spesific command please do \`abc help commandName\`")
      .setDescription("`addtag, deletetag, tag, taginfo, taglist`")

      message.channel.send(tagEmbed)

    } else if(args[1] === "mod" || "moderation") {

      const modEmbed = new Discord.RichEmbed()
      .setTitle("<:banHammer:447098955004772353> Moderation Commands")
      .setColor(settings.embedColor)
      .setFooter("The following command are only part of the category Moderation. For all commands please do \`abc help\`. For help on a spesific command please do \`abc help commandName\`")
      .setDescription("`ban, kick, purge`")

      message.channel.send(modEmbed)

    } else if(args[1] === "music") {

      const musicEmbed = new Discord.RichEmbed()
      .setTitle("🎵 Music Commands")
      .setColor(settings.embedColor)
      .setFooter("The following command are only part of the category Music. For all commands please do \`abc help\`. For help on a spesific command please do \`abc help commandName\`")
      .setDescription("`The music command 'play' only works with youtube links currently.`")

      message.channel.send(musicEmbed)

    } else if(args[1] === "system") {

      const sysEmbed = new Discord.RichEmbed()
      .setTitle("🖥️ System Commands")
      .setColor(settings.embedColor)
      .setFooter("The following command are only part of the category Music. For all commands please do \`abc help\`. For help on a spesific command please do \`abc help commandName\`")
      .setDescription("`conf, eval, help, reboot, reload, settings, test`")

      message.channel.send(sysEmbed)

    } else {
      const embedNotFound = new Discord.RichEmbed()
      .setTitle("This category is not in my database.")
      .setColor(settings.embedColor)
    }
  
  } else {
    // Show individual command's help.
    let command = args[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      if (level < client.levelCache[command.conf.permLevel]) return;
    const sCommandEmbed = new Discord.RichEmbed()
    .setTitle(`Command: ${command.help.name.toProperCase()}`)
    .setColor(settings.embedColor)
    .setDescription(command.help.description)
    .addField(`Usage:`, command.help.usage, true)
    .addField(`Aliases:`, `\`\`\`${command.conf.aliases.join(", ")}\`\`\``, true);
    message.channel.send(sCommandEmbed)

    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ht", "halpt", "commandst"],
  permLevel: "User"
};

exports.help = {
  name: "helptest",
  category: "System",
  description: "Displays all the available commands for your permission level.",
  usage: "help [command]"
};
