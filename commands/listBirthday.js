const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");
const moment = require("moment");

module.exports = async (message, client, args) => {
  const user = message.mentions.users.first();
  if (!user) {
    try {
      for (const arg of args) {
        while (new Date(arg) == undefined) {}
      }
    } catch {
      await message.channel.send("Não entendi.. 🧐");
      return;
    }
  }

  var ID = client.users.cache.get("805035898990755850");
  moment.locale("pt-br");
  await mongo().then(async (mongoose) => {
    try {
      await BDStorage.findOne({
        _id: u.id,
      }).then((results) => {
        console.log(results);

        // const { bdate } = results.bddates;
        const listEmbed = new Discord.MessageEmbed()
          .setColor("#831fde")
          .setTitle("Aniversariante")
          .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
          .addField(
            `@${u.username} faz aniversário em`,
            `${moment(new Date(results.bdate)).format("DD [de] MMMM")}`
          );

        message.channel.send(listEmbed);
      });
    } catch {
      await message.channel.send(
        "Não achei registros dessa pessoa na minha lista.. 🧐"
      );
      return;
    } finally {
      await mongoose.connection.close();
      return;
    }
  });
};
