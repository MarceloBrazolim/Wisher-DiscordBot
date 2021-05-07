const cron = require("node-cron");

const Discord = require("discord.js");
const mongo = require("./mongo");
const BDStorage = require("./schemes/main-schema");
const moment = require("moment");
const getImage = require("./util/getImage");

const { debugg } = require("./config.json");

module.exports = async (client) => {
  cron.schedule(
    "00 00 12 * * *",
    async (client) => {
      moment.locale("pt-br");

      if (debugg) console.log("checking");

      await mongo().then(async () => {
        const results = await BDStorage.find({
          bdate: moment()
            .month(new Date().getMonth())
            .date(new Date().getDate())
            .format("MM DD"),
        });
        // console.log(results);

        for (let result of results) {
          let guild = await client.guilds.fetch(result.gID);

          if (!guild.available) continue;

          const channel = guild.channels.cache.find(
            (channel) =>
              channel.type === "text" &&
              channel.permissionsFor(guild.me).has("SEND_MESSAGES")
          );

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

          if (results[0] && !results[1]) {
            // Embed
            birthdayEmbed
              .setTitle("HOJE É SEU ANIVERSÁRIO!!!")
              .setDescription(`<@!${result._id}>`)
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
          } else if (results[0]) {
            // Embed
            birthdayEmbed
              .setTitle("FELIZ ANIVERSÁRIO À TODOS VOCÊS!!!")
              .addFields(
                {
                  name: "Obrigada por fazerem parte do nosso server!",
                  value:
                    "Muitas felicidades e muitos anos de vida pra vocês," +
                    "\ntenham um ótimo dia e um excelente aniversário!\n" +
                    "\n🇭 🇦 🇵 🇵 🇾 🥳 🎉 👏\n🇧 🇮 🇷 🇹 🇭 🇩 🇦 🇾\n🎈 🪅 🎉 🎊 🎈 🪅 🎊 🎉",
                }
                // { name: "\u200B", value: "\u200B" }
              );
            // if (debugg) console.log(birthdayEmbed);
            let tmpUser = "";
            for (let result of results) {
              tmpUser += `<@!${result._id}>\n`;
            }
            birthdayEmbed.addField("\u200B", `${tmpUser}`);
          }

          await getImage(channel, path, xpath, att, "bd", "", birthdayEmbed);
        }
      });
    },
    {
      scheduled: true,
      timezone: "America/Sao_Paulo",
    }
  );
};
