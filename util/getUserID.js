module.exports = async (message, mention, client, command) => {
  if (!mention) {
    console.log("No mention");
    message.channel.send("Você tem que mencionar alguém, bobinho..");
    return;
  }

  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);

    if (!mention.startsWith("!")) {
      message.channel.send("Ei! N vou cair nessa kk 😘");
      return;
    } else if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }

    var user = client.users.cache.get(mention);
    var { username, discriminator } = user;
    console.log(`mentioned: { ${username}#${discriminator} }`);
  }

  if (!user) {
    console.log("No mention");
    message.channel.send("Você tem que mencionar alguém, bobinho..");
    return;
  }

  switch (command) {
    case "avatar":
      await message.author.send(user.displayAvatarURL({ dynamic: true }));
      break;
    case "info":
      var {
        id,
        system,
        locale,
        flags,
        username,
        bot,
        discriminator,
        avatar,
        lastMessageID,
        lastMessageChannelID,
      } = user;
      console.log(user);
      await message.author.send(
        "```\nid: " +
          id +
          "\nsystem: " +
          system +
          "\nlocale: " +
          locale +
          "\nflags: UserFlags { bitfield: " +
          flags +
          " }\nusername: " +
          username +
          "\nbot: " +
          bot +
          "\ndiscriminator: " +
          discriminator +
          "\navatar: " +
          avatar +
          "\nlastMessageID: " +
          lastMessageID +
          "\nlastMessageChannelID: " +
          lastMessageChannelID +
          "```"
      );
      break;
  }
};
