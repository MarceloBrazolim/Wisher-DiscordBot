const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
// const moment = require("moment");
const getUserID = require("../../util/getUserID");
const getImage = require("../../util/getImage");
const isDateToday = require("../../util/isDateToday");

module.exports = async (message) => {
  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.find();
      if (!results) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        return;
      }

      // Send gif
      const xpath = ".GifList .column .GifListItem .Gif img";
      const path = "https://tenor.com/search/celebration-gifs";
      const att = "src";

      const user = await getUserID(message, command);

      // Embed
      const todayBdEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Hoje é seu aniversário!")
        // .setAuthor(user.username, user.displayAvatarURL({ dynamic: true }))
        .setDescription(`<@!${user.id}>`)
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .addField(
          "Obrigada por fazer parte do nosso server!",
          "Muitas felicidades e muitos anos de vida pra você,\ntenha um ótimo dia e um excelente aniversário!",
          true
        )
        .addField("🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏", "🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾")
        .setTimestamp();
      await getImage(message, path, xpath, att, command, todayBdEmbed);

      for (let date of results) {
        if (await isDateToday(date.bdate)) {
        }
      }
      return;
    } finally {
      await mongoose.connection.close();
      return;
    }
  });
};
