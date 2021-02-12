const setBirthday = require("../commands/setBirthday");

module.exports = async (message, args, uID, client) => {
  switch (args[0]) {
    case "birthday":
    case "bd":
      await setBirthday(message, args, uID, client);
      break;
  }
};
