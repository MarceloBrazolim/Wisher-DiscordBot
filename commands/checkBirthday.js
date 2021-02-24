const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");
const getUserID = require("../util/getUserID");
const moment = require("moment");

module.exports = async (message, client, args) => {
  const user = await getUserID(message);
  if (!user) return;

  moment.locale("pt-br");
  const dateRaw = moment(new Date(args[1]));

  var ID = client.users.cache.get("805035898990755850");

  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.find({
        _id: user.id,
      }).exec();
      if (!results) throw "Não achei registros na minha lista.. 🧐";
      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
        .setTitle("Aniversariante")
        .addField(
          `@${results._id.username}#${results._id.discriminator} faz aniversário em`,
          `**${moment(new Date(results.bdate)).format("DD [de] MMMM")}**`
        );

      // if (dateRaw) {
      //   listEmbed.setTitle(
      //     `Aniversariantes em ${moment(new Date(aniversariante.bdate)).format(
      //       "DD [de] MMMM"
      //     )}:`
      //   );
      //   for (let aniversariante of results) {
      //     listEmbed.addField(
      //       `@${aniversariante._id.username}`,
      //       `#${aniversariante._id.discriminator}`
      //     );
      //   }
      // } else if (user && !dateRaw) {
      //   listEmbed [...] }

      message.channel.send(listEmbed);
    } catch (e) {
      await message.channel.send(e);
    } finally {
      await mongoose.connection.close();
      return;
    }
  });
};
