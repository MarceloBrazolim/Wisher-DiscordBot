const setBirthday = require("../commands/setBirthday");
const checkBirthday = require("../commands/checkBirthday");

module.exports = async (message, client, args) => {
  switch (args[0]) {
    case "set":
      await setBirthday(message, client, args);
      break;
    case "check":
      checkBirthday(message, client, args);
      break;
  }
};
