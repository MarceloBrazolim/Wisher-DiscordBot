const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");
const getUserID = require("../util/getUserID");
const moment = require("moment");

module.exports = async (message, client) => {
  const user = await getUserID(message);
  if (!user) return;

  moment.locale("pt-br");
  // const dateRaw = moment(new Date(args[1]));

  var ID = client.users.cache.get("805035898990755850");

  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.find({
        _id: user.id,
      }).exec();
      console.log(results.bdate);
      // console.log("1");
      if (!results) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        return;
      }
      // console.log("2");
      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
        .setTitle("Aniversariante:")
        .addField(
          `**${user.username}**#${user.discriminator} faz aniversário em`,
          `**${moment(new Date(results.bdate)).format("DD [de] MMMM")}**`
        );
      // console.log("3");

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
      // console.log("4");
    } finally {
      await mongoose.connection.close();
      // console.log("5");
      return;
    }
  });
};
