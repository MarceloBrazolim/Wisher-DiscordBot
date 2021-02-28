const Discord = require("discord.js");
const getImage = require("../../util/getImage");
const getUserID = require("../../util/getUserID");

module.exports = async (message, command) => {
  // Send gif
  const xpath = ".GifList .column .GifListItem .Gif img";
  const path = "https://tenor.com/search/celebration-gifs";
  const att = "src";

  const user = await getUserID(message);
  // Embed
  const birthdayEmbed = new Discord.MessageEmbed()
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
  await getImage(message, path, xpath, att, command, birthdayEmbed);
  return;
};
