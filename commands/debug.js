const moment = require("moment");

// Kudo https://github.com/iSherlott
// function formatDate(data) {
//   let fdata = [...data];
//   return `${fdata[8]}${fdata[9]}-${fdata[5]}${fdata[6]}-${fdata[0]}${fdata[1]}${fdata[2]}${fdata[3]}`; // Ano Mes Dia
// }

module.exports = async (message, args) => {
  switch (args[0]) {
    case "date":
      moment.locale("pt-br");
      var result = moment(new Date(args[1])).format("DD [de] MMMM");
      console.log(`D|>|Debug: ${result}`);
      message.channel.send(result);
    default:
      console.log(`D|>|Debug: ${args}`);
  }
};
