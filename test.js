const { ptBR } = require("date-fns/locale");

const DateFnsAdapter = require("@date-io/date-fns");

const dateFns = new DateFnsAdapter({ locale: ptBR });
console.log(dateFns);

var a = ["a", "b", "outubro 28", "c"];
console.log(a);
const initialDateFnsDate = dateFns.date(a[2]);
console.log(initialDateFnsDate);

console.log(dateFns.format(initialDateFnsDate, "monthAndDate").split(/ +/)); // "2018, October 30th 11:44"
