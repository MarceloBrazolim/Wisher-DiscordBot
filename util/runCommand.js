// Misc
const ping = require("../commands/ping");
const macaco = require("../commands/macaco");
const lagarto = require("../commands/lagarto");
const coinmaster = require("../commands/coinmaster");
const hello = require("../commands/hello");

// Util
const isAdm = require("./isAdm");

// Dev
const debug = require("../commands/debug");

// Main
const getUserID = require("./getUserID"); // Multiples functions (also ADM)
const help = require("../commands/help");

// Side
const imgInit = require("../commands/imgInit");

// Method to handle multiple commands
module.exports = async (message, command, args, client) => {
  // Command triggers
  switch (command) {
    // Main
    case "help":
      await help(message, args, client);
      break;
    case "set":
      await getUserID(message, client, command, args);
      break;
      case "listbirthday":
      case "listbd":
      case "lbd":
      case "list":
        await getUserID(message, client);
        break;

    // Side
    case "img":
    case "image":
      await imgInit(message, command, args);
      break;
    case "gif":
      await imgInit(message, command, args);
      break;
    case "astolfo":
      await imgInit(message, command, args);
      break;

    // Adm
    case "avatar":
      if (!(await isAdm(message))) break;
      await getUserID(message, args[0], client, command);
      break;
    case "info":
      if (!(await isAdm(message))) break;
      await getUserID(message, args[0], client, command);
      break;

    // Dev
    case "debug":
      if (!(await isAdm(message))) break;
      await debug(message, args);
      break;

    // Misc
    case "ping":
      await ping(message);
      break;
    case "macaco":
    case "mamaco":
      await macaco(message);
      break;
    case "lagarto":
    case "largarto":
    case "largato":
      await lagarto(message);
      break;
    case "coinmaster":
      await coinmaster(message);
      break;
    case "hello":
      await hello(message);
      break;
  }
};
