const setBirthday = require("../commands/setBirthday");

module.exports = (message, args, uID, client) => {
  switch (args[0]) {
    case "birthday":
    case "bd":
      setBirthday(message, args, uID, client);
      break;
  }
};
