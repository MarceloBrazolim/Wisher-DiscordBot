const processDate = require("../util/processDate");

module.exports = async (message, args, uID, client) => {
  var date = processDate(new Date(args[2]), { format: "M d" });

  await update(date, uID)
};
