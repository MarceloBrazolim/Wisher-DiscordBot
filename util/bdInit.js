const setBirthday = require("../commands/setBirthday");
const listBirthday = require("../commands/listBirthday");

module.exports = async (message, uID, client, args) => {
  switch (args[0]) {
    case "set":
      await setBirthday(message, uID, client, args);
      break;
    case "check":
      listBirthday(message, uID, client, args);
      break;
  }
};
