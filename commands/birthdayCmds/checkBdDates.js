const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
const moment = require("moment");
const getImage = require("../../util/getImage");
// const { debugg } = require("../../config.json");

module.exports = async (message, command, client) => {
  moment.locale("pt-br");

  await mongo().then(async () => {
    // try {
    const results = await BDStorage.find({
      gID: message.channel.guild.id,
      bdate: moment()
        .month(new Date().getMonth())
        .date(new Date().getDate())
        .format("MM DD"),
    });
    console.log(results[0]);

    if (!results[0]) {
      const list = await BDStorage.find({
        gID: message.channel.guild.id,
      });

      let replyEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Ninguém faz aniversário hoje :v");

      const sortedDates = list.sort(
        (a, b) =>
          new moment(new Date(a.bdate)).format("MMDD") -
          new moment(new Date(b.bdate)).format("MMDD")
      );
      // if (debugg) console.log("sortedDates: " + sortedDates);

      const todayYear = new Date().getFullYear();

      for (let date of sortedDates) {
        let isFuture = moment(new Date()).isBefore(
          new Date(date.bdate).setFullYear(todayYear)
        );
        let userBD = moment(new Date(date.bdate).setFullYear(todayYear)).format(
          "DD[/]MMM[/]YYYY"
        );

        // if (debugg) console.log(userBD, isFuture);

        if (isFuture) {
          replyEmbed.setDescription(
            `O próximo aniversário vai ser de <@!${date._id}> no dia **${userBD}**!`
          );
          break;
        }
      }

      await message.channel.send(replyEmbed);
      return;
    }

    // Send gif
    const xpath = ".GifList .column .GifListItem .Gif img";
    const path = "https://tenor.com/search/celebration-gifs";
    const att = "src";

    const birthdayEmbed = new Discord.MessageEmbed()
      .setColor("#831fde")
      .setAuthor(
        client.user.tag,
        client.user.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();

    if (!results[1]) {
      // Embed
      // const user = client.users.cache.get(results[0]._id);
      birthdayEmbed
        .setTitle("HOJE É SEU ANIVERSÁRIO!!!")
        .setDescription(`<@!${results[0]._id}>`)
        // .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .addFields(
          {
            name: "Obrigada por fazer parte do nosso server!",
            value:
              "Muitas felicidades e muitos anos de vida pra você,\ntenha um ótimo dia e um excelente aniversário!",
            inline: false,
          },
          {
            name: "🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏",
            value: "🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾\n🪅 🎈 🎉 🎊 🎈 🪅 🎊 🎉",
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
      // if (debugg) console.log(birthdayEmbed);
      for (let result of results) {
        let tmpUser = client.users.cache.get(result._id);
        birthdayEmbed.addField(
          `${tmpUser.username}`,
          `#${tmpUser.discriminator}`
        );
      }
    }
    await getImage(message, path, xpath, att, command, "", birthdayEmbed);
    // } catch (err) {
    //   console.error(`X|>|${err} at checkBdDates.js`);
    // }
  });
};
