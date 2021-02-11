const setBirthday = require("../commands/setBirthday");
// const setReminder = require("../commands/setReminder");

module.exports = async (message, args, user, client) => {
  switch (args[0]) {
    case "birthday":
      await setBirthday(message, args, user, client);
      break;
    case "bd":
      await setBirthday(message, args, user, client);
      break;
    // case "reminder":
    //   await setReminder(message, client);
    //   break;
    // case "rm":
    //   await setReminder(message, client);
    //   break;
  }
};
