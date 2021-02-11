const avatar = require("../commands/avatar");
const info = require("../commands/info");
const setInit = require("./setInit");

module.exports = async (message, mention, client, command) => {
  if (!mention) {
    console.log("X|<|Err: No mention");
    message.channel.send("Você tem que mencionar alguém, bobinho..");
    return;
  }

  if (mention.startsWith("%3c@") && mention.endsWith("%3e")) {
    mention = mention.slice(4, -3);

    if (mention.startsWith("&")) {
      message.channel.send("Ei! N vou cair nessa kk 😘");
      return;
    } else if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }

    var user = client.users.cache.get(mention);
    console.log(`||>|Mentioned: { ${user.username}#${user.discriminator} }`);
  }

  if (!user) {
    console.log("X|>|Err: No mention");
    message.channel.send("Você tem que mencionar alguém, bobinho..");
    return;
  }

  switch (command) {
    case "avatar":
      await avatar(message, user);
      break;
    case "info":
      await info(message, user);
      break;
    case "set":
      await setInit(message, mention, user.id, client);
      break;
  }
};
