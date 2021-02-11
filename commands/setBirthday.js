const processDate = require("../util/processDate");

module.exports = async (message, args, user, client) => {
  var date = processDate(new Date(args[2]), { format: "M d" });

  //   switch (args[0]) {
  //     case "":
  //       if (isFuture(new date())) {
  //         // await update(date, ID);
  //       }
  //       break;
  //   }
};
