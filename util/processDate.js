const { ptBR } = require("date-fns/locale");
const { format, parseISO } = require("date-fns");
// const DateFnsAdapter = require("@date-io/date-fns");

module.exports = async (date, typeFormat) => {
  // const dateFns = new DateFnsAdapter({ locale: ptBR });
  // const initialDate = dateFns.date(date); // Ex: 2018-10-28T11:44:00.000Z .toLowerCase()

  // return dateFns.format(initialDate, typeFormat);

  var a = encodeURI("2014-02-11T11:30:30");
  return result = format(parseISO(date[0]), typeFormat, { locale: ptBR });
};
