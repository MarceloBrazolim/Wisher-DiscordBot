const Discord = require("discord.js");
const moment = require("moment");
const update = require("../../util/update");
const getUserID = require("../../util/getUserID");
const { prefix } = require("../../config.json");

module.exports = async (message, args, user) => {
  // Format date
  moment.locale("pt-br");
  var dateRaw = moment(new Date(args[2].toLowerCase()));
  if (isNaN(dateRaw)) {
    await message.channel.send("Você tem que falar uma data, ne! 🙄");
    return;
  }
  var dateIntern = dateRaw.format("MM DD");
  var date = dateRaw.format("D [de] MMMM");
  console.log(`D|>|Date: ${date}`);

  // Embeds
  var confirmationEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Blz! A data de aniversário está certa?")
    .addField(`**${date}**`, `${prefix}sim | ${prefix}nao`);

  const confirmNo = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Se está com problemas, a sintaxe correta é:")
    .setDescription(`**${prefix}bd set** <**mention**> <**mes**/**dia**>`);

  const confirmYes = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Irei me lembrar!! 👌")
    .setDescription(`O aniversário de <@!${user.id}> será em **${date}**!`);

  // First embed
  await message.channel.send(confirmationEmbed);

  const answer = await message.channel.awaitMessages(
    (msg) => msg.content.includes(prefix),
    { max: 1, time: 30000 }
  );
  const answerMap = answer
    .map((msg) => msg.content)
    .join("")
    .toLowerCase();
  switch (answerMap) {
    case `${prefix}hai`:
    case `${prefix}yes`:
    case `${prefix}sim`:
    case `${prefix}sí`:
    case `${prefix}si`:
    case `${prefix}s`:
    case `${prefix}y`:
      // Inserts into DB
      const userInfo = user.username + "#" + user.discriminator;
      await update(message.channel.guild.id, dateIntern, user.id, userInfo);
      message.react("👍");
      await message.channel.send(confirmYes);
      break;
    case `${prefix}n`:
    case `${prefix}no`:
    case `${prefix}nao`:
    case `${prefix}não`:
    case `${prefix}iee`:
      await message.channel.send(confirmNo);
      break;
  }
  return;
};
