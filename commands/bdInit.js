const setBirthday = require("./birthdayCmds/setBirthday");
const checkBirthday = require("./birthdayCmds/checkBirthday");
const sendHappyBd = require("./birthdayCmds/sendHappyBd");
const listBd = require("./birthdayCmds/listBd");
const checkBdDates = require("./birthdayCmds/checkBdDates");

module.exports = async (message, args, command) => {
  switch (args[0]) {
    case "set":
      await setBirthday(message, args);
      break;
    case "sendH":
    case "h":
      await sendHappyBd(message, command);
      break;
    case "list":
    case "l":
      await listBd(message);
      break;
    case "check":
      await checkBirthday(message);
      break;
    case "anyToday":
    case "today":
    case "bdToday":
    case "birthdayToday":
      await checkBdDates(message);
      break;
  }
  return;
};
