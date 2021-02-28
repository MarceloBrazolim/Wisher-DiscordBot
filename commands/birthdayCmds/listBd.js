const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
const moment = require("moment");

module.exports = async (message) => {
  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.find();
      // const results = [];
      // console.log(results);
      if (!results) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        throw "No registry";
      }

      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Aniversariantes");

      console.log(results);
      for (result of results) {
        console.log(result);
        listEmbed.addField(
          `**<@!${result._id}>**`,
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
