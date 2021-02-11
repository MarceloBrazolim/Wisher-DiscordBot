const { ptBR } = require("date-fns/locale");
// const { isFuture } = require("date-fns");
// const update = require("./update");

module.exports = async (date, format) => {
  result = format(date, format, { locale: ptBR }).split(/ +/);
  console.log(`D|<|Date: ${result}`);
};
