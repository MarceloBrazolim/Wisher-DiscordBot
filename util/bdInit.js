const setBirthday = require("../commands/setBirthday");
const checkBirthday = require("../commands/checkBirthday");
const sendHappyBd = require("./sendHappyBd");

module.exports = async (message, client, args) => {
  switch (args[0]) {
    case "set":
      await setBirthday(message, args);
      break;
    case "check":
      await checkBirthday(message);
      break;
    case "sendH":
    case "h":
      await sendHappyBd(message);
      break;
  }
};
