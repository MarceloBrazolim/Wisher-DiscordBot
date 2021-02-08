// Returns true if the message author have ADM permission

module.exports = (message) => {
  if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) {
    return true;
  }
  return false;
};
