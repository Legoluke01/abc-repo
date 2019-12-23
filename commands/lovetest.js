var Responses = [
  "Yes",
  "No",
  "Maybe",
  "Don't know, try again",
  "Of course not, try again maybe",
  "I mean, I guess so",
  "If you say so",
  "I'm not saying anything but you know the answer",
  "Definitely not",
  "Its a possibility",
  "A huge chance",
  "A small chance",
  "You better hope so",
  "You better not hope so"
];

exports.run = async (client, message, args, level) => {

  if(!args[0]){
    return message.channel.send(":x: " + "| Please Enter A person/object")
}

if (args[0]) {
  message.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "lovetest",
  category: "Entertainment",
  description: "Check to see if you or 2 other users are compatible",
  usage: "lovetest [user/object] | lovetest [user/object] [user/object]"
};
