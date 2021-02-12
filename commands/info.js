module.exports = async (message, user) => {
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
};
