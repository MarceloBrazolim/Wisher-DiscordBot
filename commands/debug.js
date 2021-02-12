const processDate = require("../util/processDate");

module.exports = async (message, args) => {
  switch (args[0]) {
    case "date":
      console.log(`D|>|Date: ${args[1]}`)
      const result = processDate(new Date(args[1]), { typeFormat: "monthAndDate" }); // ~~"MMMM d" or~~ "monthAndDate"
      console.log(`D|>|Result: ${result}`);
      // message.channel.send(result);
      break;
    default:
      console.log(`D|>|Debug: ${args}`);
  }
};
