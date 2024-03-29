const Discord = require("discord.js");
const isAdm = require("../util/isAdm");
const { prefix } = require("../config.json");

module.exports = async (message, args, client) => {
  for (let i in args) {
    args[i] = args[i].toLowerCase();
  }
  var helpEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Lista de comandos disponíveis:")
    .setAuthor(
      client.user.username,
      client.user.displayAvatarURL({ dynamic: true })
    )
    .addFields({
      name: "Comandos Gerais",
      value:
        "**`" +
        prefix +
        "help <misc/adm/dev>`**\n" +
        "Exibe esta lista que você está lendo.\n" +
        "\n" +
        "**`" +
        prefix +
        "birthday <set/check/list/next>`:**\n" +
        "-> **`set <mention> <mês-dia>`**" +
        " Registra a pessoa pra receber feliz aniversário!\n" +
        "   -Ex.: " +
        prefix +
        "bd set @" +
        client.user.tag +
        " 3-6 (6 de março)\n" +
        "-> **`check <mention>`:**" +
        " Checa a data de aniversário de um membro registrado.\n" +
        "-> **`list`:**" +
        " Lista a data de aniversário de todo mundo do servidor!\n" +
        "-> **`next`:**" +
        " Checa se alguem faz aniversário hoje e mostra qual a próxima data de aniversário.\n" +
        "\n" +
        "**`" +
        prefix +
        "img <args>`:**\n" +
        "**`" +
        prefix +
        "gif <args>`:**\n" +
        "Mostra uma imagem ou gif aleatório com o que você quiser!\n" +
        // "As funções de imagem só podem ser usadas em canais NSFW. não me julgue, são as regras do Discord..."

        "\n" +
        "**`" +
        prefix +
        "astolfo`:**\n" +
        "Hehehehehe~ 😍",
    });

  for (let i in args) {
    if (misc) break;
    if (args[i] == "misc" || args[i] == "miscelaneous") {
      var misc = true;

      helpEmbed.addFields(
        { name: "\u200B", value: "\u200B" },
        {
          name: "Comandos Genéricos",
          value:
            "**`" +
            prefix +
            "macaco`:**\n" +
            "largals 🦎\n" +
            "**`" +
            prefix +
            "lagarto`:**\n" +
            "camaquinhu 🐒\n" +
            "**`" +
            prefix +
            "coinmaster`:**\n" +
            "VILA? 👀\n" +
            "**`" +
            prefix +
            "hello`:**\n" +
            "hello, 📑?\n",
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
          name: "Comandos de ADM",
          value:
            "**`" +
            prefix +
            "info <mention>`:**\n" +
            "Mando informaçoes técnicas do usuário mencionado por DM\n" +
            "**`" +
            prefix +
            "avatar <mention>`:**\n" +
            "Mando a imagem de perfil do usuário mencionado por DM\n",
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
        name: "Comandos do Desenvolvedor",
        value:
          "**`" +
          prefix +
          "debugg <args>`:**\n" +
          "Ferramenta de teste do desenvolvedor.\n" +
          "**`" +
          prefix +
          "version`:**\n" +
          "Mostra qual a versão da aplicação.\n",
      });
    }
  }

  for (let i in args) {
    if (secret) break;
    if (args[i] == "secret" || args[i] == "danger") {
      var secret = true;
      var checkPerm = await isAdm(message);
      if (!checkPerm) return;

      if (!misc && !adm) {
        helpEmbed.addFields({ name: "\u200B", value: "\u200B" });
      }
      helpEmbed.addFields({
        name: "Comando Perigoso (SÓ PRA ADM)",
        value:
          "**`" +
          prefix +
          "unregisterAll`:**\n" +
          "Remove todos os registros de membros do servidor atual da minha lista de aniversariantes.\n",
      });
    }
  }

  message.channel.send(helpEmbed);
  return;
};
