const { ptBR } = require("date-fns/locale");
const { format, parseISO } = require("date-fns");
// const DateFnsAdapter = require("@date-io/date-fns");

module.exports = async (date, typeFormat) => {
  // const dateFns = new DateFnsAdapter({ locale: ptBR });
  // const initialDate = dateFns.date(date); // Ex: 2018-10-28T11:44:00.000Z .toLowerCase()

  // return dateFns.format(initialDate, typeFormat);

  var a = encodeURI("2014-02-11T11:30:30");
  let troxa = new Date(date);
  console.log(troxa);
  let result = format(troxa, "MMMM d");
  console.log(result);
  // format(new Date(date), "MMMM d");
};
