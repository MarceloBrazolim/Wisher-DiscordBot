const { ptBR } = require("date-fns/locale");
const { format, parseISO } = require("date-fns");

// const DateFnsAdapter = require("@date-io/date-fns");

// const dateFns = new DateFnsAdapter({ locale: ptBR });
// console.log(dateFns);

var a = encodeURI("2014-02-11T11:30:30")
.split("'")
.filter(() => (arg = "'"))
.join("")
.split("%20");

console.log(a[0]);

var b = format(parseISO(a[0]), /*typeFormat*/ "MMMM d", { locale: ptBR });
console.log(b);
// const initialDateFnsDate = dateFns.date(a);
// console.log(initialDateFnsDate);

// console.log(dateFns.format(initialDateFnsDate, "fullDateTime24h")); // "2018, October 30th 11:44"
