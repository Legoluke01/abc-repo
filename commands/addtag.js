const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment")

exports.run = async (client, message, args, level) => {

    const settings = client.getSettings(message.guild)

    let name = args[0];
    if (!name) return message.channel.send("Please specify a tag name. **Note:** Tags cannot have spaces.")
let value = args.splice(1).join(" ")
   if (!value) return message.channel.send("Sorry dude, I can't make empty tags.")


let content = value
let createdby = message.author.username
let createdbyid = message.author.id
let names = name
let date = moment().format('MMMM Do YYYY, h:mm:ss a')
 
let tags = await db.fetch(`tags_${message.guild.id}-${name}`)

 if (tags) return message.channel.send(`The tag **${name}** already exists on this server. `);

     db.set(`tags_${message.guild.id}-${name}.name`, names)
     db.set(`tags_${message.guild.id}-${name}.content`, content)
     db.set(`tags_${message.guild.id}-${name}.createdby`, createdby)
     db.set(`tags_${message.guild.id}-${name}.createdbyid`, createdbyid)
     db.set(`tags_${message.guild.id}-${name}.date`, date)
     
     let embed = new Discord.RichEmbed()
     .setTitle(`Tag created! \nView All Tags with **${settings.prefix}taglist**`)
     .setColor(settings.embedColor)
     .setFooter(`Remeber that this tag can only be accesed in this server!`)
    
     message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["at"],
    permLevel: "Administrator"
}

exports.help = {
    name: "addtag",
    category: "Tags",
    description: "Adds tags to your server",
    usage: "addtag <name> <content>"
}