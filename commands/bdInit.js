const setBirthday = require("./birthdayCmds/setBirthday");
const checkBirthday = require("./birthdayCmds/checkBirthday");
const sendHappyBd = require("./birthdayCmds/sendHappyBd");
const listBd = require("./birthdayCmds/listBd");

module.exports = async (message, args, command, client) => {
  switch (args[0]) {
    case "set":
      await setBirthday(message, args);
      break;
    case "check":
      await checkBirthday(message);
      break;
    case "sendH":
    case "h":
      await sendHappyBd(message, command);
      break;
    case "list":
    case "l":
      await listBd(message, client);
      break;
  }
  return;
};
