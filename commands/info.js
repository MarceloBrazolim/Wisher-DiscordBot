const getUserID = require("../util/getUserID");

module.exports = async (message) => {
  const user = getUserID(message);
  console.log(user);
  await message.author.send(
    "```\nid: " +
      user.id +
      "\nsystem: " +
      user.system +
      "\nlocale: " +
      user.locale +
      "\nflags: UserFlags { bitfield: " +
      user.flags +
      " }\nusername: " +
      user.username +
      "\nbot: " +
      user.bot +
      "\ndiscriminator: " +
      user.discriminator +
      "\navatar: " +
      user.avatar +
      "\nlastMessageID: " +
      user.lastMessageID +
      "\nlastMessageChannelID: " +
      user.lastMessageChannelID +
      "```"
  );
  return;
};
