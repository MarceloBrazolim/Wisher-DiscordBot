const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");
const moment = require("moment");

module.exports = async (message, client, args) => {
  try {
    const user = message.mentions.users.first();
    if (!user) throw "undefined";
  } catch {
    try {
      const date = new Date(args[1]);
      if (date == "Invalid date") throw err;
    } catch (err) {
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

        const listEmbed = new Discord.MessageEmbed()
          .setColor("#831fde")
          .setTitle("Aniversariante")
          .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }));

        if (user) {
          listEmbed.addField(
            `@${u.username} faz aniversário em`,
            `${moment(new Date(results.date)).format("DD [de] MMMM")}`
          );
        } else if (date) {
          listEmbed.addField(
            `@${u.username} faz aniversário em`,
            `${moment(new Date(results.date)).format("DD [de] MMMM")}`
          );
        } else {
          console.log(`X|>|Fatal Error: unknown.\n${error}`);
          return;
        }

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
