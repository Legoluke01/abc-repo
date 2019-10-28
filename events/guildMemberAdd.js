const Canvas = require("canvas")

module.exports = async (client, member) => {
  const settings = client.getSettings(member.guild);

  if (settings.welcomeEnabled !== "true") return;

  const welcomeMessage = settings.welcomeMessage.replace("{{user}}", member.user.tag);

  member.guild.channels.find(c => c.name === settings.welcomeChannel).send(welcomeMessage).catch(console.error);

  if (settings.welcomeRoleEnabled == "true") {

    var role = member.guild.roles.find(role => role.name === settings.welcomeRole);
    member.addRole(role.id);

  } else return;
};
