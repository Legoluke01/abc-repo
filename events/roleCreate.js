module.exports = async (client, role) => {

    const settings = client.getSettings(role.guild);
    const logging_channel = role.guild.channels.find(c => c.name === settings.modLogChannel)

    const logMessage = `= ROLE CREATED =\n\nRole Name: ${role.name}\nRole ID: ${role.id}\nRole Permissions: ${role.permissions.map(p => p.name).join(', ')}\nTime & Date: ${client.timeVar}`

    if (settings.loggingEnabled === "true") {

    logging_channel.send(logMessage, {code: "asciidoc", split: { char: "\u200b" }})

    } else return;


}