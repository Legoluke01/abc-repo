exports.run = async(client, message, args, level) => {
    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 2 || deleteCount > 100) {
        return message.channel.send('Bro I don\'t think that\'s right. (Max 100; Min 2)');
    }
    message.channel.fetchMessages({ 'limit': deleteCount })
        .then(function(list) {
            message.channel.bulkDelete(list);
        })
        .catch(error => message.channel.send(`Ok something broke: ${error}`));
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["prune", "delete"],
    permLevel: "Moderator"
};

exports.help = {
    name: "purge",
    category: "Moderation",
    description: "Remove a certain amount of messages.",
    usage: "purge <num>"
};