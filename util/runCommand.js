// Misc
const ping = require("../commands/ping");
const macaco = require("../commands/macaco");
const lagarto = require("../commands/lagarto");
const coinmaster = require("../commands/coinmaster");
const hello = require("../commands/hello");

// Util
const isAdm = require("./isAdm");
const getUserID = require("./getUserID");

// Dev
const debug = require("../commands/debug");
const { version } = require("../package.json");

// Adm
// const avatar = require("../commands/avatar");
// const info = require("../commands/info");

// Main
const bdInit = require("../commands/bdInit");
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
    case "bd":
    case "birthday":
    case "aniversario":
      await bdInit(message, args, command, client);
      break;

    // Side
    case "img":
    case "image":
    case "gif":
    case "astolfo":
      await imgInit(message, command, args);
      break;

    // Adm
    case "avatar":
      if (!(await isAdm(message))) break;
      await getUserID(message, command);
      break;
    case "info":
      if (!(await isAdm(message))) break;
      await getUserID(message, command);
      break;

    // Dev
    case "debug":
    case "d":
      if (!(await isAdm(message))) break;
      await debug(message, args);
      break;
    case "version":
    case "versao":
      await message.channel.send(`Wisher Bot App v${version}`);
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
  return;
};
