// const Discord = require("discord.js");
const getImage = require("./getImage");
// const getUserID = require("./getUserID");

module.exports = async (message) => {
  // Get gif
  const xpath = ".GifList .column .GifListItem .Gif img";
  const path = "https://tenor.com/search/celebration-gifs";
  const att = "src";
  await getImage(message, path, xpath, att, { option: "url" }).then((result) => console.log(result + " result"));

  // const user = await getUserID(message);
  // console.log(user);

  // // Embed
  // const birthdayEmbed = new Discord.MessageEmbed()
  //   .setColor("#831fde")
  //   .setTitle("Hoje é seu aniversário!")
  //   .setAuthor(user.username, user.displayAvatarURL({ dynamic: true }))
  //   .setThumbnail(user.displayAvatarURL({ dynamic: true }))
  //   .addField(
  //     "Obrigada por fazer parte do nosso server!",
  //     "Muitas felicidades e muitos anos de vida pra você,\ntenha um ótimo dia e um excelente aniversário!",
  //     true
  //   )
  //   .setImage(gif);
  // // .addField("🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏\n🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾");

  // console.log(birthdayEmbed);
  // await message.channel.send(birthdayEmbed);
  return;
};
