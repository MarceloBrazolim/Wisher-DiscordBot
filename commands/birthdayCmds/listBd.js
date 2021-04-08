const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
const moment = require("moment");

module.exports = async (message) => {
  moment.locale("pt-br");
  await mongo().then(async () => {
    try {
      // const guildID = message.channel.guild.id;
      const results = await BDStorage.find({
        gID: { $in: [message.channel.guild.id] },
      });
      if (!results[0]) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        throw "No registry";
      }

      // Sorting method
      const sortedDates = results.sort(
        (a, b) =>
          new moment(new Date(a.bdate)).format("MMDD") -
          new moment(new Date(b.bdate)).format("MMDD")
      );

      let userList = "";
      for (let result of sortedDates) {
        userList += `- <@!${result._id}> faz aniversário em **${moment(
          new Date(result.bdate)
        ).format("D [de] MMMM")}**\n`;
      }
      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Aniversariantes")
        .setDescription(`${userList}`);

      await message.channel.send(listEmbed);
    } catch (err) {
      console.error(`X|>|${err} at listBd.js`);
    }
  });

  return;
};
