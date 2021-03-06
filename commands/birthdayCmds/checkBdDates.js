const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
const moment = require("moment");
const getImage = require("../../util/getImage");

module.exports = async (message, command, client) => {
  moment.locale("pt-br");
  var ID = client.users.cache.get("805035898990755850");

  await mongo().then(async () => {
    try {
      const results = await BDStorage.find({
        gID: message.channel.guild.id,
        bdate: moment()
          .month(new Date().getMonth())
          .date(new Date().getDate())
          .format("MM DD"),
      });
      if (!results[0]) {
        await message.channel.send("Ninguém faz aniversário hoje :v");
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
          .setDescription(`<@!${user.id}>`)
          .setThumbnail(user.displayAvatarURL({ dynamic: true }))
          .addFields(
            {
              name: "Obrigada por fazer parte do nosso server!",
              value:
                "Muitas felicidades e muitos anos de vida pra você,\ntenha um ótimo dia e um excelente aniversário!",
              inline: false,
            },
            {
              name: "🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏",
              value: "🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾\n🎈 🪅 🎉 🎊 🎈 🪅 🎊 🎉",
              inline: false,
            }
          );
      } else {
        // Embed
        birthdayEmbed.setTitle("FELIZ ANIVERSÁRIO À TODOS VOCÊS!!!").addFields(
          {
            name: "Obrigada por fazerem parte do nosso server!",
            value:
              "Muitas felicidades e muitos anos de vida pra vocês,\ntenham um ótimo dia e um excelente aniversário!",
          },
          {
            name: "🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏",
            value: "🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾\n🎈 🪅 🎉 🎊 🎈 🪅 🎊 🎉",
          }
          // { name: "\u200B", value: "\u200B" }
        );
        // console.log(birthdayEmbed);
        for (let result of results) {
          let tmpUser = client.users.cache.get(result._id);
          birthdayEmbed.addField(
            `${tmpUser.username}`,
            `#${tmpUser.discriminator}`
          );
        }
      }
      await getImage(message, path, xpath, att, command, {
        embed: birthdayEmbed,
      });
    } catch (err) {
      console.error(`X|>|${err} at checkBdDates.js`);
    }
  });
};
