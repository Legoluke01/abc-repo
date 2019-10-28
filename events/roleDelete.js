module.exports = async (client, role) => {
    const settings = client.getSettings(role.guild);
    const logging_channel = role.guild.channels.find(c => c.name === settings.modLogChannel)

    const logMessage = `= ROLE DELETED =\n\nRole Name: ${role.name}\nRole ID: ${role.id}\nTime & Date: ${client.timeVar}`

    if (settings.loggingEnabled === "true") {

    logging_channel.send(logMessage, {code: "asciidoc", split: { char: "\u200b" }})
    } else return;
}