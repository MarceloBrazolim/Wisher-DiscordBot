const Discord = require("discord.js");
const moment = require("moment");
const update = require("../util/update");
const getUserID = require("../util/getUserID");
const { prefix } = require("../config.json");

module.exports = async (message, client, args) => {
  const user = await getUserID(message);

  // Format date
  moment.locale("pt-br");
  var dateRaw = moment(new Date(args[2]));
  var dateIntern = dateRaw.format("MM DD");
  var date = dateRaw.format("DD [de] MMMM");
  console.log(`D|>|Date: ${date}`);

  // Embeds
  const ID = client.users.cache.get("805035898990755850");
  var confirmationEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Blz! A data de aniversário está certa?")
    .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
    .addField(`**${date}**`, `${prefix}sim / ${prefix}nao`);

  const confirmNo = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Se está com problemas, a sintaxe correta é:")
    .setDescription(`**${prefix}set bd <mention> <mes/dia>**`);

  const confirmYes = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Irei me lembrar!! 👌")
    .setDescription(
      `**O aniversário de ${user.username}#${user.discriminator} será em ${date}!**`
    );

  // First embed
  await message.channel.send(confirmationEmbed);

  const answer = await message.channel.awaitMessages(
    (msg) => msg.content.includes(prefix),
    { max: 1, time: 30000 }
  );
  const answerMap = answer.map((msg) => msg.content).join(", ");
  switch (answerMap) {
    case `${prefix}yes`:
    case `${prefix}sim`:
      console.log(`D|>|Await: Yes`);
      // Inserts into DB
      await update(dateIntern, user.id);
      await message.react("👍");
      await message.channel.send(confirmYes);
      break;
    case `${prefix}no`:
    case `${prefix}nao`:
    case `${prefix}não`:
      console.log(`D|>|Await: No`);
      await message.channel.send(confirmNo);
      break;
  }
};
