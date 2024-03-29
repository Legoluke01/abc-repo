const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment")
const yes = ["yes", "y", "ye", "yeah", "yup", "yea", "ya"];
const no = ["no", "n", "nah", "nope", "nop"];


exports.run = async (client, message, args, level) => {
    const settings = client.getSettings(message.guild)
    try {
        let name = args[0]; 
      let tags = await db.fetch(`tags_${message.guild.id}-${name}`)
      
       let content = tags.content
      let createdby = tags.createdby
      let createdbyid = tags.createdbyid
      let created = tags.created
      let names = tags.name
      let date = tags.date
          
           if (!name) return message.channel.send("I can't delete a tag that doesn't exist")
    
        let confirmembed = new Discord.RichEmbed()
        .setTitle(`**Delete Tag?**`)
        .setDescription(`**Are you sure you want to Delete this Tag?**\nThe tag ${name} will be deleted forever. Type yes to confirm or type no to cancel.\nYou have 30 seconds before this automatically cancels.`)
        .setColor(settings.embedColor)
        message.channel.send(confirmembed);
        
      const hit = await verifyText(message.channel, message.author);
      if (hit) {
            db.delete(`tags_${message.guild.id}-${name}`);
    
        message.channel.send(
          `Deleted Tag **${name}**`
        );
      } else {
        message.channel.send(
          `Cancelled.`
       
        );
      }
    } catch (e){
      if (e.message === "Cannot read property 'content' of null")
      return message.channel.send(`Hmm, I can;t seem to find this tag in my database. Check for the following:\n1. Tags are case sensitive\n2. Tags don't contain spaces\n3. You can't delete another servers tags`)
    
        
    };
    
    async function verifyText(channel, user, time = 30000) {
      const filter = res => {
        const value = res.content.toLowerCase();
        return (
          res.author.id === user.id && (yes.includes(value) || no.includes(value))
        );
      };
      const verify = await channel.awaitMessages(filter, {
        max: 1,
        time
      });
      if (!verify.size) return 0;
      const choice = verify.first().content.toLowerCase();
      if (yes.includes(choice)) return true;
      if (no.includes(choice)) return false;
      return false;
    }

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rt"],
    permLevel: "Administrator"
}

exports.help = {
    name: "removetag",
    category: "Tags",
    description: "Removes tags to from server",
    usage: "removetag <name>"
}