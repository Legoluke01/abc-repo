module.exports = async (client, message) => {
    const settings = client.getSettings(message.guild);

    if (settings.loggingEnabled === "true") {

        let timeVar = new Date(Date.now());
        const logging_channel = message.guild.channels.find(c => c.name === settings.modLogChannel);

        logging_channel.send(`= MESSAGE DELETED =\nUser: ${message.author.tag}\nUser ID: ${message.author.id}\nTime & Date: ${timeVar}\nMessage Content: ${message}`, {code: "asciidoc", split: { char: "\u200b" }})

    } else return;





}