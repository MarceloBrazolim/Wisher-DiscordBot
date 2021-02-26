// const Discord = require("discord.js");
const getImage = require("./getImage");
// const getUserID = require("./getUserID");

module.exports = async (message) => {
  console.log("a");
  const user = await getUserID(message);

  // Embed
  const birthdayEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Hoje é seu aniversário!")
    // .setAuthor(user.username, user.displayAvatarURL({ dynamic: true }))
    .setDescription(`@${user.username}#${user.discriminator}`)
    .setThumbnail(user.displayAvatarURL({ dynamic: true }))
    .addField(
      "Obrigada por fazer parte do nosso server!",
      "Muitas felicidades e muitos anos de vida pra você,\ntenha um ótimo dia e um excelente aniversário!",
      true
    )
    // .setImage(gif);
    .addField("🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏\n🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾");
  await message.channel.send(birthdayEmbed);

  // Send gif
  const xpath = ".GifList .column .GifListItem .Gif img";
  const path = "https://tenor.com/search/celebration-gifs";
  const att = "src";
  getImage(message, path, xpath, att);

  return;
};
