const setBirthday = require("../commands/setBirthday");
const moment = require("moment");

module.exports = async (message, uID, client, args) => {
  switch (args[0]) {
    case "set":
      await setBirthday(message, uID, client, args);
      break;
    case "check":
      checkBirthday(message, uID, client, args);
      break;
  }
};
