const astolfo = require("./imgInit/astolfo");
const gif = require("./imgInit/gif");
const img = require("./imgInit/img");

module.exports = async (message, command, args) => {
  // Forbidden terms
  for (let x in args) {
    if (args[x] == "daddy" || args[x] == "mommy") {
      message.channel.send("n vou procurar por isso.. 😑");
      return;
    }
  }

  switch (command) {
    case "img":
    case "image":
      await img(message, args);
      break;
    case "gif":
      await gif(message, args);
      break;
    case "astolfo":
      await astolfo(message);
      break;
  }

  for (let x in args) {
    if (
      args[x] == "criança" ||
      args[x] == "kid" ||
      args[x] == "children" ||
      args[x] == "baby"
    ) {
      await message.channel.send("uhg 😒");
    }
  }
};
