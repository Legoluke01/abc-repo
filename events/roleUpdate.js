module.exports = async (client, oldRole, newRole) => {
    const settings = client.getSettings(oldRole.guild);
    const logging_channel = oldRole.guild.channels.find(c => c.name === settings.modLogChannel)


const logMessage = `= ROLE EDITED =\n\n(Old Role) Name: ${oldRole.name}\n(Old Role) Color: ${oldRole.hexColor}\n(Old Role) Hoisted?: ${oldRole.hoist}\n(Old Role) Mentionable?: ${oldRole.mentionable}(Old Role) Permissions: ${oldRole.permissions.map(p => p.name).join(", ")}\n\n(New Role) Name: ${newRole.name}\n(New Role) Color: ${newRole.hexColor}\n(New Role) Hoisted?: ${newRole.hoist}\n(New Role) Mentionable?: ${newRole.mentionable}(New Role) Permissions: ${newRole.permissions.map(p => p.name).join(", ")}`

    if (settings.loggingEnabled === "true") {

        logging_channel.send(logMessage, {code: "asciidoc", split: { char: "\u200b" }})

    } else return;

}