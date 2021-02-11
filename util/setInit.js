const setBirthday = require("../commands/setBirthday");
// const setReminder = require("../commands/setReminder");

module.exports = async (message, args, uID, client) => {
  switch (args[0]) {
    case "birthday":
      await setBirthday(message, args, uID, client);
      break;
    case "bd":
      await setBirthday(message, args, uID, client);
      break;
    // case "reminder":
    //   await setReminder(message, client);
    //   break;
    // case "rm":
    //   await setReminder(message, client);
    //   break;
  }
};
