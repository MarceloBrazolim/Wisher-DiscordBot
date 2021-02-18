const setBirthday = require("../commands/setBirthday");
const listBirthday = require("../commands/listBirthday");

module.exports = async (message, client, command, args) => {
  switch (args[0]) {
    case "set":
      await setBirthday(message, client, command, args);
      break;
    case "check":
      listBirthday(message, client, command, args);
      break;
  }
};
