const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");
const getUserID = require("../util/getUserID");
const moment = require("moment");

module.exports = async (message, client) => {
  const user = await getUserID(message);
  if (!user) return;

  moment.locale("pt-br");

  var ID = client.users.cache.get("805035898990755850");

  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.find({
        _id: user.id,
      });
      if (!results) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        return;
      }
      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Aniversariante:")
        .setDescription(
          `**${user.username}**#${
            user.discriminator
          } faz aniversário em **${moment(new Date(results[0].bdate)).format(
            "D [de] MMMM"
          )}**`
        );

      message.channel.send(listEmbed);
    } finally {
      await mongoose.connection.close();
      return;
    }
  });
};
