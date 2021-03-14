const moment = require("moment");

const dates = ["7-25", "5-5", "3-13"];

const todayYear = new Date().getFullYear();

for (let date of dates) {
  let test = moment(new Date()).isBefore(new Date(date).setFullYear(todayYear));
  console.log(
    moment(new Date(date).setFullYear(todayYear)).format("[-] D[/]M[/]YYYY"),
    test
  );
}
