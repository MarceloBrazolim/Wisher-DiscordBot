const { ptBR } = require("date-fns/locale");

const DateFnsAdapter = require("@date-io/date-fns");

const dateFns = new DateFnsAdapter({ locale: ptBR });
// console.log(dateFns);

var a = "2018-10-28t11:44:00.000Z";
console.log(a);
const initialDateFnsDate = dateFns.date(a);
console.log(initialDateFnsDate);

console.log(dateFns.format(initialDateFnsDate, "fullDateTime24h")); // "2018, October 30th 11:44"
