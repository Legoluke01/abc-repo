const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, level) => {

 let tagname = args.join(" ");
 if(!tagname) return message.channel.send(`**Specify a Tag Name**\n*Note: Case Sensitive Tag Names!*`)
  
 let tags = await db.fetch(`tags_${message.guild.id}-${tagname}`)
 if(!tags) return message.channel.send(`Hmm, I can't seem to find this tag in my database. Check for the following:\n1. Tags are case sensitive\n2. Tags don't contain spaces\n3. You can't view another servers tags`)

 let content = tags.content
 let createdby = tags.createdby
 let created = tags.created
 let name = tags.name
 let date = tags.date

   message.channel.send(`${content}`)
         
 }
 exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["t"],
    permLevel: "User"
}

exports.help = {
    name: "tag",
    category: "Tags",
    description: "Lets you view a tag",
    usage: "tag <name>"
}