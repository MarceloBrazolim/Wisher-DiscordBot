const Discord = require("discord.js");
const moment = require("moment");
const sendHappyBd = require("./birthdayCmds/sendHappyBd");
const { debugg } = require("../config.json");

// Kudo https://github.com/iSherlott
// function formatDate(data) {
//   let fdata = [...data];
//   return `${fdata[8]}${fdata[9]}-${fdata[5]}${fdata[6]}-${fdata[0]}${fdata[1]}${fdata[2]}${fdata[3]}`; // Ano Mes Dia
// }

module.exports = async (message, args, client) => {
  switch (args[0]) {
    case "date":
      moment.locale("pt-br");
      var result = moment(new Date(args[1]));
      if (debugg) console.log(`D|>|Date: ${result}`);
      await message.channel.send(result.format());
      break;
    case "await":
      await message.channel.send("Escutando..");
      const msgs = await message.channel.awaitMessages((msg) => msg.content, {
        time: 10000,
      });
      const msgMap = msgs.map((msg) => msg.content).join(", ");
      if (debugg) console.log(`D|>|Await: ${msgMap}`);
      await message.channel.send(`Terminei de escutar: ${msgMap}`);
      break;
    case "mention":
      const target = message.mentions.users.first();
      if (!target) {
        console.error("X|>|Err: No mention");
        await message.channel.send("Você tem que mencionar alguém, bobinho..");
      } else {
        if (debugg) console.log(`D|>|Mention: ${target}`);
      }
      break;
    case "bdEmbed":
    case "happyBd":
    case "happy":
    case "h":
      await sendHappyBd(message);
      break;
    case "embed":
      args.shift();
      const debugEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle(`Título: ${args}`)
        .setDescription(`Descrição: ${args}`)
        .addField(`${args}`, `Campo 2: ${args}`, true);
      await message.channel.send(debugEmbed);
    case "message":
    case "msg":
      if (debugg) console.log("D|>|Message: ", message);
      break;

    case "me":
      console.log(message.author);
      break;

    case "you":
      console.log(client, "\n\n", client.guilds);
      break;

    case "guild":
      // let guilds = client.guilds.cache.map((guild) => guild.id);
      // let names = client.guilds.cache.map((guild) => guild.name);

      let guild = await client.guilds.fetch("837634248151793684");
      console.log(guild);
      break;

    case "path":
    case "p":
      const channel = message.guild.channels.cache.find(
        (channel) =>
          channel.type === "text" &&
          channel.permissionsFor(message.guild.me).has("SEND_MESSAGES")
      );
      await channel.send("Thanks for inviting me");
      console.log(message.guild.channels);
      break;

    default:
      if (debugg) console.log(`D|>|Default: ${args}`);
  }
  return;
};
