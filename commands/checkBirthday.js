const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");
const moment = require("moment");

module.exports = async (message, client, args) => {
  const user = message.mentions.users.first();
  if (!args[1]) {
    console.log("X|>|No Mention or Date");
    await message.channel.send("Não entendi.. 🧐");
    return;
  }
  if (!user) {
    const date = new Date(args[1]);
    if (date == "Invalid date") {
      console.log("X|>|Invalid Mention or Date");
      await message.channel.send("Usuário ou data inválida.. 🧐");
      return;
    }
  }

  var ID = client.users.cache.get("805035898990755850");
  moment.locale("pt-br");
  await mongo().then(async (mongoose) => {
    try {
      await BDStorage.findOne({
        _id: user.id,
        bdate: date,
      }).then((results) => {
        console.log(results);

        const listEmbed = new Discord.MessageEmbed()
          .setColor("#831fde")
          .setTitle("Aniversariante")
          .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }));

        if (user) {
          listEmbed.addField(
            `@${results._id.username} faz aniversário em`,
            `${moment(new Date(results.bdate)).format("DD [de] MMMM")}`
          );
        } else if (date) {
          listEmbed.addField(
            `@${u.username} faz aniversário em`,
            `${moment(new Date(results.bdate)).format("DD [de] MMMM")}`
          );
        } else {
          throw "X|>|Fatal Error: unknown.";
        }

        message.channel.send(listEmbed);
      });
    } catch {
      console.error();
      await message.channel.send("Não achei registros na minha lista.. 🧐");
    } finally {
      await mongoose.connection.close();
      return;
    }
  });
};
