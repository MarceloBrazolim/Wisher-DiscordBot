const isAdm = require("./isAdm");

// Dev
const debug = require("../commands/debug");

// Misc
const ping = require("../commands/ping");
const macaco = require("../commands/macaco");
const lagarto = require("../commands/lagarto");
const coinmaster = require("../commands/coinmaster");

// Method to handle multiple commands
module.exports = async (message, command, args) => {
  // Command triggers
  switch (command) {
    // Main
    // case "set":
    //   await set(message, args);
    //   break;

    // Side
    // case "img":
    //   await img(message, args);
    //   break;

    // Dev
    case "debug":
      if (isAdm) {
        await debug(message, args);
      } else {
        await message.channel.send("Você não tem permissão pra fazer isso.");
        console.log("User without permission to perform action.")
      }
      break;

    // Misc
    case "ping":
      await ping(message);
      break;
    case "macaco":
      await macaco(message);
      break;
    case "lagarto":
      await lagarto(message);
      break;
    case "coinmaster":
      await coinmaster(message);
      break;
  }
};
