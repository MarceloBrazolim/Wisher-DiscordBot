const { ptBR } = require("date-fns/locale");
const { format, parseISO } = require("date-fns");

const DateFnsAdapter = require("@date-io/date-fns");

const dateFns = new DateFnsAdapter({ locale: ptBR });
// console.log(dateFns);

var a = "2014-02-11T11:30:30";
console.log(a);
const initialDateFnsDate = dateFns.date(a);
console.log(initialDateFnsDate);

console.log(dateFns.format(initialDateFnsDate, "fullDateTime24h")); // "2018, October 30th 11:44"
