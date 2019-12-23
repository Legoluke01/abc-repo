const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args, level) => {

    const settings = client.getSettings(message.guild);

    let input = args.join(" ")

    if (!input) return message.reply("Give me something to encode!")

    const embed = new Discord.RichEmbed()
    .setTitle("ABCify")
    .setColor(settings.embedColor)
    .addField("**Input:**", `\`\`\`${input}\`\`\``)

     const output = input.replace("A", "Z")

    .replace("a", "z")
    .replace("B", "Y")
    .replace("b", "y")
    .replace("C", "X")
    .replace("c", "x")
    .replace("D", "W")
    .replace("d", "w")
    .replace("E", "V")
    .replace("e", "v")
    .replace("F", "U")
    .replace("f", "u")
    .replace("G", "T")
    .replace("g", "t")
    .replace("H", "S")
    .replace("h", "s")
    .replace("I", "R")
    .replace("i", "r")
    .replace("J", "Q")
    .replace("j", "q")
    .replace("K", "P")
    .replace("k", "p")
    .replace("L", "O")
    .replace("l", "o")
    .replace("M", "N")
    .replace("m", "n")
    .replace("N", "M")
    .replace("n", "m")
    .replace("O", "L")
    .replace("o", "l")
    .replace("P", "K")
    .replace("p", "k")
    .replace("Q", "J")
    .replace("q", "j")
    .replace("R", "I")
    .replace("r", "i")
    .replace("S", "H")
    .replace("s", "h")
    .replace("T", "G")
    .replace("t", "g")
    .replace("U", "F")
    .replace("u", "f")
    .replace("V", "E")
    .replace("v", "e")
    .replace("W", "D")
    .replace("w", "d")
    .replace("X", "C")
    .replace("x", "c")
    .replace("Y", "B")
    .replace("y", "b")
    .replace("Z", "A")
    .replace("z", "a")

    //Numbers

    .replace("1", ";")
    .replace("2", "}")
    .replace("3", "<")
    .replace("4", "|")
    .replace("5", "/")
    .replace("6", "_")
    .replace("7", "-")
    .replace("8", "$")
    .replace("9", "@")
    .replace(" ", "%");
    


    embed.addField("**Output:**", `\`\`\`${output}\`\`\``);


    message.channel.send(embed)
         
 }
 exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["customencoder"],
    permLevel: "Bot Owner"
}

exports.help = {
    name: "abcify",
    category: "Other",
    description: "Covert numbers and any letter in the english aplhabet into a encoded language I made myself.",
    usage: "abcify <text>"
}