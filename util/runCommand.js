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

// Adm
const getUserID = require("./getUserID");

// Main
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
      if (isAdm(message)) { // Temporary adm permission needed
        await getUserID(message, args, client);
      }
      break;

    // Side
    case "img":
      await imgInit(message, command, args);
      break;
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
      var checkPerm = await isAdm(message);
      if (!checkPerm) break;
      await getUserID(message, args[0], client, command);
      break;
    case "info":
      var checkPerm = await isAdm(message);
      if (!checkPerm) break;
      await getUserID(message, args[0], client, command);
      break;

    // Dev
    case "debug":
      await isAdm(message);
      if (!isAdm) break;
      await debug(args);
      break;

    // Misc
    case "ping":
      await ping(message);
      break;
    case "macaco":
      await macaco(message);
      break;
    case "mamaco":
      await macaco(message);
      break;
    case "lagarto":
      await lagarto(message);
      break;
    case "largarto":
      await lagarto(message);
      break;
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
