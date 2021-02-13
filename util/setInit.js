const setBirthday = require("../commands/setBirthday");

module.exports = async (message, args, uID) => {
  switch (args[0]) {
    case "birthday":
    case "bd":
      await setBirthday(message, args, uID);
      break;
  }
};
