const processDate = require("../util/processDate");

module.exports = async (message, args) => {
  switch (args[0]) {
    case "date":
      console.log(`D|>|${args}`)
      const result = processDate(new Date(args[1]), { format: "MMMM d" });
      console.log(`D|>|${result}`);
      message.channel.send(result);
      break;
    default:
      console.log(`D|>|Debug: ${args}`);
  }
};
