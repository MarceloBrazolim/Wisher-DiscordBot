const astolfo = require("./imgInit/astolfo");
const gif = require("./imgInit/gif");
const img = require("./imgInit/img");

module.exports = async (message, command, args) => {
  // Forbidden terms
  var argsLower = [];
  for (let x in args) {
    argsLower[x] = args[x].toLowerCase();
  }
  for (let x in argsLower) {
    switch (argsLower[x]) {
      case "daddy":
      case "mommy":
        await message.channel.send("n vou procurar por isso.. 😑");
        return;
    }
  }

  switch (command) {
    case "img":
    case "image":
      await img(message, args, command);
      break;
    case "gif":
      await gif(message, args, command);
      break;
    case "astolfo":
      await astolfo(message, command);
      break;
  }
  // for (let x in argsLower) {
  //   switch (argsLower[x]) {
  //     case "criança":
  //     case "kid":
  //     case "children":
  //     case "baby":
  //       await message.channel.send("uhg 😒");
  //   }
  // }

  return;
};
