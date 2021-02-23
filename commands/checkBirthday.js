const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");
const moment = require("moment");

module.exports = async (message, client, args) => {
  if (!args[1]) {
    console.log("X|>|No Mention or Date");
    await message.channel.send("Não entendi..");
    return;
  }

  moment.locale("pt-br");
  const user = message.mentions.users.first();
  const dateRaw = moment(new Date(args[1]));
  var ID = client.users.cache.get("805035898990755850");

  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.findOne({
        _id: user.id,
        bdate: date,
      });
      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Aniversariante")
        .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
        .addField(
          `@${results._id.username}#${results._id.discriminator} faz aniversário em`,
          `${moment(new Date(results.bdate)).format("DD [de] MMMM")}`
        );

      message.channel.send(listEmbed);
    } catch {
      await message.channel.send("Não achei registros na minha lista.. 🧐");
    } finally {
      await mongoose.connection.close();
      return;
    }
  });
};
