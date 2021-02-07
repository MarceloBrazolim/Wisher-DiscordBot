const runCommand = require("./runCommand");

module.exports = async (message, command, args) => {
  try {
    await runCommand(message, command, args);
  } catch {
    console.error();
  }
};
