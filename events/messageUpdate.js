module.exports = async (client, oldMessage, newMessage) => {
    const settings = client.getSettings(oldMessage.guild);

    if (settings.loggingEnabled === "true") {
        if (oldMessage.author.id === client.user.id) return;


        let timeVar = new Date(Date.now());
        const logging_channel = oldMessage.guild.channels.find(c => c.name === settings.modLogChannel);

        logging_channel.send(`= MESSAGE EDITED =\nUser: ${oldMessage.author.tag}\nUser ID: ${oldMessage.author.id}\nTime & Date: ${timeVar}\nOld Message Content ::\n${oldMessage}\nNew Message Content ::\n${newMessage}`, {code: "asciidoc", split: { char: "\u200b" }})




    } else return;





}