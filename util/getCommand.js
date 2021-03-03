const runCommand = require("./runCommand");

// method that defines how the commands interacts
module.exports = async (message, command, args, client) => {
  try {
    await runCommand(message, command, args, client);
    // console.error(`X|^|Err on runCommand.js`);
    return;
  } catch (e) {
    console.error(`X|>|${e}`);
    return;
  }
};
