const setBirthday = require("../commands/setBirthday");
const moment = require("moment");

module.exports = async (message, args, uID) => {
  switch (args[0]) {
    case "birthday":
    case "bd":
      moment.locale("pt-br");
      const date = moment(new Date(args[2])).format("DD [de] MMMM");
      console.log(`D|>|Debug: ${date}`);
      await setBirthday(message, date, uID);
      break;
  }
};
