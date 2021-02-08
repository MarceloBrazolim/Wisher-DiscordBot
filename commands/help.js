const Discord = require("discord.js");
const isAdm = require("../util/isAdm");

module.exports = async (message, args, client) => {
  var ID = client.users.cache.get("805035898990755850");
  var helpEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Lista de comandos disponíveis")
    .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
    .addField("`--help`", "Exibe esta lista que você está lendo.")
    .addField(
      "`--set <bd/rmd> <mention> <ano/mês/dia>`",
      "**[off]** Define um lembrete personalizado(rmd) ou uma data de aniversario(bd) 🥳!"
    )
    .addField(
      "`--img <args>`",
      "**[off]** Mostra uma imagem aleatória com o que você quiser."
    )
    .addField(
      "`--gif <args>`",
      "**[off]** É praticamente a mesma coisa do --img... só que .gif"
    )
    .addField("`--astolfo`", "**[off]** hehehehehe~ 😍")
    .addField(
      "`--embed <mention>`",
      "**[off]** ou mexer nesse ainda, mas ele ta dá parabens. :)"
    );

  for (let i in args) {
    if (adm == true) {
      break;
    }
    if (args[i] == "adm" || args[i] == "administrator") {
      var adm = true;
      await isAdm(message);
      if (!isAdm) return;

      helpEmbed.addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "`[adm] --info <mention>`",
          value: "Mando informaçoes técnicas do usuário mencionado por DM",
        },
        {
          name: "`[adm] --avatar <mention>`",
          value: "Mando a imagem de perfil do usuário mencionado por DM",
        }
      );
    }
  }

  for (let i in args) {
    if (dev == true) {
      break;
    }
    if (args[i] == "dev" || args[i] == "developer") {
      var dev = true;
      await isAdm(message);
      if (!isAdm) return;

      helpEmbed.addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "`[dev] --debugg <args>`",
          value: "Mando os args formatados e processados no console",
        }
      );
    }
  }
  message.channel.send(helpEmbed);
};
