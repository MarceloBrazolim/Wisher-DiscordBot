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
      console.log(`D|>|Date: ${result}`);
      message.channel.send(result);
      break;
    case "await":
      await message.channel.send("Escutando..");
      const msgs = await message.channel.awaitMessages((msg) => msg.content, {
        time: 10000,
      });
      const msgMap = msgs.map(msg => msg.content).join(", ")
      console.log(`D|>|Await: ${msgMap}`)
      message.channel.send(`Terminei de escutar: ${msgMap}`);
    default:
      console.log(`D|>|Default: ${args}`);
  }
};
