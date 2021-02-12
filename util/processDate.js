const { ptBR } = require("date-fns/locale");
const DateFnsAdapter = require("@date-io/date-fns");

module.exports = async (date, typeFormat) => {
  const dateFns = new DateFnsAdapter();
  const initialDate = dateFns.date(date); // Ex: 2018-10-28T11:44:00.000Z

  dateFns.format(initialDate, typeFormat);

  // return format(date, typeFormat, { locale: ptBR });
};
