const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
const moment = require("moment");

module.exports = async (message, client) => {
  moment.locale("pt-br");
  await mongo().then(async (mongoose) => {
    try {
      // const guildID = message.channel.guild.id;
      const results = await BDStorage.find({
        gID: message.channel.guild.id,
      });
      if (!results[0]) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        throw "No registry";
      }

      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Aniversariantes");

      for (let result of results) {
        let tmpUser = client.users.cache.get(result.mID);
        listEmbed.addField(
          `${tmpUser.username}#${tmpUser.discriminator}`,
          `faz aniversário em **${moment(new Date(result.bdate)).format(
            "D [de] MMMM"
          )}**`
        );
      }

      await message.channel.send(listEmbed);
    } catch (e) {
      console.log(`X|>|${e} at listBd.js`);
    } finally {
      await mongoose.connection.close();
      return;
    }
  });

  return;
};
