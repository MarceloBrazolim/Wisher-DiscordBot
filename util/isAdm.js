// Returns true if the message author have ADM permission

module.exports = async (message) => {
  if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) {
    await message.react("👍");
    return true;
  } else {
    console.log("User without permission to perform action.")
    await message.channel.send("Você não tem permissão pra fazer isso.");}
  return false;
};
