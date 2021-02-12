const { ptBR } = require("date-fns/locale");
const { format, parseISO } = require("date-fns");

// const DateFnsAdapter = require("@date-io/date-fns");

// const dateFns = new DateFnsAdapter({ locale: ptBR });
// console.log(dateFns);

var a = encodeURI("2014-02-13")
.split("'")
.filter(() => (arg = "'"))
.join("")
.split("%20");

console.log(a[0]);

var b = format(new Date(a[0]), "MMMM d");
console.log(b);
// const initialDateFnsDate = dateFns.date(a);
// console.log(initialDateFnsDate);

// console.log(dateFns.format(initialDateFnsDate, "fullDateTime24h")); // "2018, October 30th 11:44"
