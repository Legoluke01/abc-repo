const figlet = require("figlet")

exports.run = async (client, message, args, level) => {
    var maxLen = 25
    if (!args[0]) return message.channel.send("You didn't provide anything. Make sure its less than 25 chars.");

    if (args.join(' ').length > maxLen) return message.channel.send("It is better not to exceed the number of characters greater than 25, otherwise on mobile devices there may be distortions!")
  
  
    figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
        console.dir(err);
        return;
      }
  
      message.channel.send(`${data}`, {
        code: 'AsciiArt'
      });
    });
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: "User"
  };
  
  exports.help = {
    name: "ascii",
    category: "Entertainment",
    description: "It well, it like does stuff with words that you provide. Idk see for yourself.",
    usage: "ascii [content below 25 chars]"
  };
  