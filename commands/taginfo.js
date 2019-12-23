const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, level) => {
    const settings = client.getSettings(message.guild);

 let tagname = args.join(" ");
 if(!tagname) return message.channel.send(`You must Specify a Tag Name to look-up.`)
  
 let tags = await db.fetch(`tags_${message.guild.id}-${tagname}`)
 if(!tags) return message.channel.send(`**Tag Not Found** 🔎\n\n*Names are Case Sensitive. Make sure its spelt correctly!*`)

 let content = tags.content
 let createdby = tags.createdby
 let createdbyid = tags.createdbyid
 let created = tags.created
 let name = tags.name
 let date = tags.date

   let embed = new Discord.RichEmbed()
   .setTitle(`**Tag Info of ${name}**`)
   .setThumbnail(`${message.guild.iconURL}?size=2048`)
   .setColor(settings.embedColor)
   .setDescription(`**Content:** To view the content please do the tag command\n**Created by:** ${createdby} | ${createdbyid}\n**Tag created on:** ${created} | ${date}`)
   .setFooter(`Tags are Guild Based, not Globally.`);
   message.channel.send(embed)
         
  }
           
  exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["ti"],
    permLevel: "User"
}

exports.help = {
    name: "taginfo",
    category: "Tags",
    description: "Gives you some info on a tag",
    usage: "taginfo <name>"
}