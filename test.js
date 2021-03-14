const moment = require("moment");

const dates = ["7-25", "3-13", "5-5"];
const sortedDates = dates.sort(
  (a, b) =>
    new moment(new Date(a)).format("MMDD") -
    new moment(new Date(b)).format("MMDD")
);
console.log(sortedDates);

const todayYear = new Date().getFullYear();

for (let date of sortedDates) {
  let isFuture = moment(new Date()).isBefore(
    new Date(date).setFullYear(todayYear)
  );
  let userBD = moment(new Date(date).setFullYear(todayYear)).format(
      "DD[/]MM[/]YYYY [-]"
    )

  console.log(userBD, isFuture);

  if (isFuture) break;
}
