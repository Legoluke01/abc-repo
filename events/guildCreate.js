// This event executes when a new guild (server) is joined.

module.exports = (client, guild) => {
  client.logger.cmd(`[GUILD JOIN] ${guild.name} (${guild.id}) added the bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id})`);
  guild.owner.send("Thank you for using ABC Bot. Please configure everything for your server with `abc set edit [value] [values's value]`");
};
