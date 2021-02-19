const Discord = require("discord.js");
const getImage = require("../../util/getImage");
const getUserID = require("./getUserID");

module.exports = async (message) => {
  // Get gif
  const xpath = ".GifList .column .GifListItem .Gif img";
  const path = "https://tenor.com/search/celebration-gifs";
  const att = "src";
  await message.channel.send(await getImage(message, path, xpath, att));

  const user = getUserID(message);

  // Embed
  var birthdayEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Hoje é seu aniversário!")
    .setAuthor(user.username, user.displayAvatarURL({ dynamic: true }))
    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
    .addField(
      "Obrigada por fazer parte do meu server!",
      "Muitas felicidades e muitos anos de vida pra você,\ntenha um ótimo dia e um excelente aniversário!",
      true
    )
    .setImage(urls[0])
    .addField("🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏\n🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾");

  message.channel.send(birthdayEmbed);
};
