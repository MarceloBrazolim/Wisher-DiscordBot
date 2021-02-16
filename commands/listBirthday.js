const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");
const moment = require("moment");

module.exports = async (message, u, client) => {
  var ID = client.users.cache.get("805035898990755850");
  const uID = u.id;
  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.findOne({
        uID,
      });
      console.log(results)
      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Aniversariante")
        .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }));

      for (const bddate of results.bddates) {
        const { bdate } = bddate;
        listEmbed.addField(
          `@${u.username} faz aniversário em`,
          `${moment(new Date(bdate)).format("DD [de] MMMM")}`
        );
      }

      await message.channel.send(listEmbed);
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
