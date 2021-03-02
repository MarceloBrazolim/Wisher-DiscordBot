const getUserID = require("../util/getUserID");

module.exports = async (message) => {
  const user = getUserID(message);
  await message.author.send(user.displayAvatarURL({ dynamic: true }));
  return;
};
