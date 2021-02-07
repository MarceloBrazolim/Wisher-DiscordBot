const ping = require("../commands/ping");

module.exports = async (message, command, args) => {
  switch (command) {
    case "ping":
      ping(message);
      break;
  }
};
