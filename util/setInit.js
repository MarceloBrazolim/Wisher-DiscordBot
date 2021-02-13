const setBirthday = require("../commands/setBirthday");

module.exports = async (message, args) => {
  switch (args[0]) {
    case "birthday":
    case "bd":
      await setBirthday(message, args);
      break;
  }
};
