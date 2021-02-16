const setBirthday = require("../commands/setBirthday");
const moment = require("moment");

module.exports = async (message, uID, client, args) => {
  switch (args[0]) {
    case "birthday":
    case "bd":
      await setBirthday(message, uID, client, args);
      break;
  }
};
