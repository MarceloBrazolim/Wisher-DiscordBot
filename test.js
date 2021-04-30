const cron = require("node-cron");

const Discord = require("discord.js");
const mongo = require("./mongo");
const BDStorage = require("./schemes/main-schema");
const moment = require("moment");
const getImage = require("./util/getImage");

async function everydayCheck(message, command, client) {
  moment.locale("pt-br");

  await mongo().then(async () => {
    const results = await BDStorage.find({
      bdate: moment()
        .month(new Date().getMonth())
        .date(new Date().getDate())
        .format("MM DD"),
    });
    console.log(results);

    // // Send gif
    // const xpath = ".GifList .column .GifListItem .Gif img";
    // const path = "https://tenor.com/search/celebration-gifs";
    // const att = "src";

    // const birthdayEmbed = new Discord.MessageEmbed()
    //   .setColor("#831fde")
    //   .setAuthor(
    //     client.user.tag,
    //     client.user.displayAvatarURL({ dynamic: true })
    //   )
    //   .setTimestamp();

    // if (!results[1]) {
    //   // Embed
    //   // const user = client.users.cache.get(results[0]._id);
    //   birthdayEmbed
    //     .setTitle("HOJE É SEU ANIVERSÁRIO!!!")
    //     .setDescription(`<@!${results[0]._id}>`)
    //     // .setThumbnail(user.displayAvatarURL({ dynamic: true }))
    //     .addFields(
    //       {
    //         name: "Obrigada por fazer parte do nosso server!",
    //         value:
    //           "Muitas felicidades e muitos anos de vida pra você,\ntenha um ótimo dia e um excelente aniversário!",
    //         inline: false,
    //       },
    //       {
    //         name: "🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏",
    //         value: "🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾\n🪅 🎈 🎉 🎊 🎈 🪅 🎊 🎉",
    //         inline: false,
    //       }
    //     );
    // } else {
    //   // Embed
    //   birthdayEmbed.setTitle("FELIZ ANIVERSÁRIO À TODOS VOCÊS!!!").addFields(
    //     {
    //       name: "Obrigada por fazerem parte do nosso server!",
    //       value:
    //         "Muitas felicidades e muitos anos de vida pra vocês," +
    //         "\ntenham um ótimo dia e um excelente aniversário!\n" +
    //         "\n🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏\n🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾\n🎈 🪅 🎉 🎊 🎈 🪅 🎊 🎉",
    //     }
    //     // { name: "\u200B", value: "\u200B" }
    //   );
    //   // if (debugg) console.log(birthdayEmbed);
    //   let tmpUser = "";
    //   for (let result of results) {
    //     tmpUser += `<@!${result._id}>\n`;
    //   }
    //   birthdayEmbed.addField("\u200B", `${tmpUser}`);
    // }
    // await getImage(message, path, xpath, att, "bd", "", birthdayEmbed);
  });
}

cron.schedule("00 00 12 * * *", await everydayCheck(), {
  scheduled: true,
  timezone: "America/Sao_Paulo",
});
