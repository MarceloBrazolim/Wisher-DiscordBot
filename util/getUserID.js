const avatar = require("../commands/avatar");
const info = require("../commands/info");
const set = require("../commands/set");

module.exports = async (message, mention, client, command) => {
  if (!mention) {
    console.log("No mention");
    message.channel.send("Você tem que mencionar alguém, bobinho..");
    return;
  }

  console.log(mention);
  if (mention.startsWith("<@") && mention.endsWith(">")) {
    mention = mention.slice(2, -1);

    if (mention.startsWith("&")) {
      message.channel.send("Ei! N vou cair nessa kk 😘");
      return;
    } else if (mention.startsWith("!")) {
      mention = mention.slice(1);
    }

    var user = client.users.cache.get(mention);
    console.log(`mentioned: { ${user.username}#${user.discriminator} }`);
  }

  if (!user) {
    console.log("No mention");
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
      await set(message, mention, client);
      break;
  }
};
