const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
const moment = require("moment");
const getImage = require("../../util/getImage");

module.exports = async (message, command, client) => {
  moment.locale("pt-br");
  var ID = client.users.cache.get("805035898990755850");

  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.find({
        bdate: moment()
          .month(new Date().getMonth())
          .date(new Date().getDate())
          .format("MM DD"),
      });
      console.log(results);
      if (!results) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        return;
      }
      // Send gif
      const xpath = ".GifList .column .GifListItem .Gif img";
      const path = "https://tenor.com/search/celebration-gifs";
      const att = "src";

      const birthdayEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

      if (!results[1]) {
        // Embed
        const user = client.users.cache.get(results[0]._id);
        birthdayEmbed
          .setTitle("HOJE É SEU ANIVERSÁRIO!!!")
          .setDescription(`<@!${results[0]._id}>`)
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .addField(
            "Obrigada por fazer parte do nosso server!",
            "Muitas felicidades e muitos anos de vida pra você,\ntenha um ótimo dia e um excelente aniversário!",
            true
          )
          .addField(
            "🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏",
            "🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾\n🎈 🪅 🎉 🎊 🎈 🪅 🎊 🎉"
          );
      } else {
        // Embed
        birthdayEmbed
          .setColor("#831fde")
          .setTitle("FELIZ ANIVERSÁRIO À TODOS VOCÊS!!!")
          .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
          .addField(
            "Obrigada por fazer parte do nosso server!",
            "Muitas felicidades e muitos anos de vida pra você,\ntenha um ótimo dia e um excelente aniversário!",
            true
          )
          .addField(
            "🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏",
            "🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾\n🎈 🪅 🎉 🎊 🎈 🪅 🎊 🎉"
          );
      }
      await getImage(message, path, xpath, att, command, birthdayEmbed);
      return;
    } finally {
      await mongoose.connection.close();
      return;
    }
  });
};
