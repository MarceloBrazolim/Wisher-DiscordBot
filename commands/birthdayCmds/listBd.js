const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
const moment = require("moment");

module.exports = async (message) => {
  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.find({
        _id: String,
        bdate: Date,
      });
      if (!results) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        return;
      }

      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Aniversariantes");

      console.log(results);
      for (result of results) {
        console.log(result);
        listEmbed.addField(
          `**<@!${result._id}>**`,
          `faz aniversário em **${moment(new Date(result[0].bdate)).format(
            "D [de] MMMM"
          )}**`
        );
      }

      message.channel.send(listEmbed);
    } finally {
      await mongoose.connection.close();
      return;
    }
  });

  return;
};
