// Returns true if the message author have ADM permission

const { debugg } = require("../config.json");

module.exports = async (message) => {
  if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) {
    // await message.react("👍");
    return true;
  } else {
    if (debugg) console.log("||>|User without permission to perform action.");
    await message.channel.send("Você não tem permissão pra fazer isso.");
  }
  return false;
};
