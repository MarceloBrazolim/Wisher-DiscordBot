const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
const moment = require("moment");

module.exports = async (message) => {
  moment.locale("pt-br");
  await mongo().then(async (mongoose) => {
    try {
      // const guildID = message.channel.guild.id;
      const results = await BDStorage.find({
        gID: message.channel.guild.id,
      });
      if (!results) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        throw "No registry";
      }

      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Aniversariantes");

      for (result of results) {
        listEmbed.addField(
          `${result.memberUser}#${result.memberDisc}`,
          `faz aniversário em **${moment(new Date(result.bdate)).format(
            "D [de] MMMM"
          )}**`
        );
      }

      message.channel.send(listEmbed);
    } catch (e) {
      console.log(`X|>|${e}`);
    } finally {
      await mongoose.connection.close();
      return;
    }
  });

  return;
};
