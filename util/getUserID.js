const avatar = require("../commands/avatar");
const info = require("../commands/info");
const setInit = require("./setInit");
const listBirthday = require("../commands/listBirthday");

module.exports = async (message, args, client, command) => {
  const user = message.mentions.users.first();
  if (!user) {
    console.log("X|>|Err: No mention");
    message.channel.send("Você tem que mencionar alguém, bobinho..");
    return;
  }
  console.log(`||>|Mentioned: { ${user.username}#${user.discriminator} }`);

  switch (command) {
    case "avatar":
      await avatar(message, user);
      break;
    case "info":
      await info(message, user);
      break;
    case "set":
      await setInit(message, args, user, client);
      break;
    case "listbirthday":
    case "listbd":
    case "lbd":
    case "list":
      await listBirthday(message, args, user, client);
      break;
  }
};
