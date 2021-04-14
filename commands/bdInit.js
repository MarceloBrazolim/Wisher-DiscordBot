const setBirthday = require("./birthdayCmds/setBirthday");
const checkBirthday = require("./birthdayCmds/checkBirthday");
const listBd = require("./birthdayCmds/listBd");
const checkBdDates = require("./birthdayCmds/checkBdDates");
const del = require("../util/delete");

const isAdm = require("../util/isAdm");
const getUserID = require("../util/getUserID");

module.exports = async (message, args, command, client) => {
  if (args[0]) args[0] = args[0].toLowerCase();
  switch (args[0]) {
    case "set":
      let uid = await getUserID(message);
      if (message.author.id != uid.id) {
        if (!(await isAdm(message))) break;
      }
      await setBirthday(message, args, uid);
      break;
    case "list":
    case "l":
      await listBd(message, client);
      break;
    case "check":
      await checkBirthday(message);
      break;
    case "any":
    case "anytoday":
    case "today":
    case "bdtoday":
    case "birthdaytoday":
    case "next":
      await checkBdDates(message, command, client);
      break;
    case "delete":
    case "del":
      let u = await getUserID(message);
      if (message.author.id != u.id) {
        if (!(await isAdm(message))) break;
      }
      await del(u.id, message);
      break;
  }
  return;
};
