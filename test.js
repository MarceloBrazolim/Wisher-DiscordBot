const moment = require("moment");

const bd = new Date("7-25");
var now = new Date();

moment.locale("pt-br");

console.log(
  moment()
    .month(new Date().getMonth())
    .date(new Date().getDate())
    .format("DD [de] MMMM [de] YYYY")
);

// if (bd.getMonth() === now.getMonth() && bd.getDate() === now.getDate()) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// console.log(bd.getMonth());
