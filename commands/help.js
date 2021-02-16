const Discord = require("discord.js");
const isAdm = require("../util/isAdm");
const { prefix } = require("../config.json");

module.exports = async (message, args, client) => {
  var ID = client.users.cache.get("805035898990755850");
  var helpEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Lista de comandos disponíveis")
    .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
    .addField(
      "`" + prefix + "help <misc/adm/dev>`",
      "Exibe esta lista que você está lendo."
    )
    .addField(
      "`" + prefix + "set <bd> <mention> <mês/dia>`",
      // Define um lembrete personalizado(rmd) ou uma data de aniversario(bd) 🥳!
      "Define um lembrete para uma data de aniversario(bd) 🥳!"
    )
    .addField(
      "`" + prefix + "img <args>`",
      "Mostra uma imagem aleatória com o que você quiser."
    )
    .addField(
      "`" + prefix + "gif <args>`",
      "É praticamente a mesma coisa do " + prefix + "img... só que .gif"
    )
    .addField("`" + prefix + "astolfo`", "hehehehehe~ 😍");

  for (let i in args) {
    if (misc) break;
    if (args[i] == "misc" || args[i] == "miscelaneous") {
      var misc = true;

      helpEmbed.addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "`[misc] " + prefix + "macaco `",
          value: "🦎",
        },
        {
          name: "`[misc] " + prefix + "lagarto`",
          value: "🐒",
        },
        {
          name: "`[misc] " + prefix + "coinmaster`",
          value: "👀",
        },
        {
          name: "`[misc] " + prefix + "hello`",
          value: "📑",
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
        value: "Mando os args formatados e processados no console",
      });
    }
  }
  message.channel.send(helpEmbed);
};
