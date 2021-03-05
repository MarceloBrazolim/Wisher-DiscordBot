const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
const getUserID = require("../../util/getUserID");
const moment = require("moment");

module.exports = async (message) => {
  const user = await getUserID(message);
  if (!user) return;

  moment.locale("pt-br");

  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.findOne({
        mID: user.id,
        gID: message.channel.guild.id,
      });
      if (!results[0]) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        return;
      }
      const checkEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Aniversariante")
        .setDescription(
          `**${user.username}**#${
            user.discriminator
          } faz aniversário em **${moment(new Date(results.bdate)).format(
            "D [de] MMMM"
          )}**`
        );

      message.channel.send(checkEmbed);
    } finally {
      await mongoose.connection.close();
      return;
    }
  });
  return;
};
