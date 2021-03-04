// Util
const isAdm = require("./isAdm");
const getUserID = require("./getUserID");

// Dev
const debugg = require("../commands/debugg");
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
    case "info":
      if (!(await isAdm(message))) break;
      await getUserID(message, command);
      break;

    // Dev
    case "debugg":
    case "d":
      if (!(await isAdm(message))) break;
      await debugg(message, args);
      break;
    case "version":
    case "versao":
    case "versão":
      await message.channel.send(`Wisher Bot App v${version}`);
      break;

    // Misc
    case "ping":
      await message.channel.send("Pong! 🏓");
      break;
    case "macaco":
    case "mamaco":
      await message.channel.send("largato 🦎");
      break;
    case "lagarto":
    case "largarto":
    case "largato":
      await message.channel.send("mamaco 🐒");
      break;
    case "coinmaster":
      await message.channel.send("VOCE ATACOU A MINHA VILA? 👀");
      break;
    case "hello":
      await message.channel.send(
        "HELLO. WOULD YOU LIKE TO SIGN MY PETITION? 📑"
      );
      break;
  }
  return;
};
