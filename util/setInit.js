const Discord = require("discord.js");
const setBirthday = require("../commands/setBirthday");
const setReminder = require("../commands/setReminder");

module.exports = async (message, args, client) => {
  switch (args[0]) {
    case "reminder":
      await setReminder(message, client);
      break;
    case "rm":
      await setReminder(message, client);
      break;
    case "birthday":
      await setBirthday(message, client);
      break;
    case "bd":
      await setBirthday(message, client);
      break;
  }
};
