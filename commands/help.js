const Discord = require("discord.js");
const isAdm = require("../util/isAdm");
const { prefix } = require("../config.json");

module.exports = async (message, args, client) => {
  for (let i in args) {
    args[i] = args[i].toLowerCase();
  }
  var ID = client.users.cache.get("805035898990755850");
  var helpEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Lista de comandos disponíveis")
    .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
    .addFields(
      {
        name: "`" + prefix + "help <misc/adm/dev>`",
        value: "Exibe esta lista que você está lendo.",
      },

      {
        name:
          "`" +
          prefix +
          "birthdday <set/check>\n" +
          "    - set <mention> <mês/dia>\n" +
          "    - check <mention>\n" +
          "    - list\n" +
          "    - today\n" +
          "`",
        value: "Gerencia lembretes de aniversario! 🥳!",
      },

      {
        name: "`" + prefix + "img <args>`",
        value: "Mostra uma imagem aleatória com o que você quiser.",
      },

      {
        name: "`" + prefix + "gif <args>`",
        value:
          "É praticamente a mesma coisa do " + prefix + "img... só que .gif",
      },

      { name: "`" + prefix + "astolfo`", value: "hehehehehe~ 😍" }
    );

  for (let i in args) {
    if (misc) break;
    if (args[i] == "misc" || args[i] == "miscelaneous") {
      var misc = true;

      helpEmbed.addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "`[misc] " + prefix + "macaco `",
          value: "largals 🦎",
        },
        {
          name: "`[misc] " + prefix + "lagarto`",
          value: "camaquinhu 🐒",
        },
        {
          name: "`[misc] " + prefix + "coinmaster`",
          value: "VILA? 👀",
        },
        {
          name: "`[misc] " + prefix + "hello`",
          value: " hello, 📑?",
        }
      );
    }
  }

  for (let i in args) {
    if (adm) break;
    if (args[i] == "adm" || args[i] == "administrator") {
      var adm = true;
      var checkPerm = await isAdm(message);
      if (!checkPerm) return;

      helpEmbed.addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "`[adm] " + prefix + "info <mention>`",
          value: "Mando informaçoes técnicas do usuário mencionado por DM",
        },
        {
          name: "`[adm] " + prefix + "avatar <mention>`",
          value: "Mando a imagem de perfil do usuário mencionado por DM",
        }
      );
    }
  }

  for (let i in args) {
    if (dev) break;
    if (args[i] == "dev" || args[i] == "developer") {
      var dev = true;
      var checkPerm = await isAdm(message);
      if (!checkPerm) return;

      if (!misc && !adm) {
        helpEmbed.addFields({ name: "\u200B", value: "\u200B" });
      }
      helpEmbed.addFields({
        name: "`[dev] " + prefix + "debugg <args>`",
        value: "Ferramenta de teste do desenvolvedor.",
      });
    }
  }
  message.channel.send(helpEmbed);
  return;
};
