const moment = require("moment");

module.exports = async (date, typeFormat) => {
  moment.locale("pt-br");
  return moment(new Date(date)).format(typeFormat);
};
