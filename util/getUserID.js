const { debugg } = require("../config.json");

module.exports = async (message, command) => {
  const user = message.mentions.users.first();
  if (!user) {
    if (debugg) console.log("D|>|Err: No mention");
    message.channel.send("Você tem que mencionar alguém, bobinho..");
    return;
  }
  if (debugg) console.log(`||>|Mentioned: { ${user.username}#${user.discriminator} }`);
  switch (command) {
    case "info":
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
      break;
    case "avatar":
      await message.author.send(user.displayAvatarURL({ dynamic: true }));
      break;
    default:
      return user;
  }
};
