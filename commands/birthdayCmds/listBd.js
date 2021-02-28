const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
const moment = require("moment");

module.exports = async (message, client) => {
  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.find();
      // const results = [];
      // console.log(results);
      if (!results) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        throw "No registry";
      }

      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Aniversariantes");

      console.log(results);

      let x = 0;
      let user = [];
      // let user = [];
      for (result of results) {
        user = client.users.cache.get(result._id);
        console.log(
          `${x}: { ${result},\n${x}: { ${user}, ${user.username}#${user.discriminator} } }\n`
        );
        x += 1;
        listEmbed.addField(
          `${user.username}#${user.discriminator}`,
          `faz aniversário em **${moment(new Date(result.bdate)).format(
            "D [de] MMMM"
          )}**`
        );
      }

      message.channel.send(listEmbed);
    } catch (e) {
      console.log(`X|>|${e}`);
    } finally {
      await mongoose.connection.close();
      return;
    }
  });

  return;
};
