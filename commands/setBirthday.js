const Discord = require("discord.js");
const moment = require("moment");
const { prefix } = require("../config.json");
// const addReaction = require("../util/addReaction");

module.exports = async (message, args, u, client) => {
  // Format date
  moment.locale("pt-br");
  var date = moment(new Date(args[2])).format("DD [de] MMMM");
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
      `**O aniversário de ${u.username}#${u.discriminator} será em ${date}!**`
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
      await message.channel.send(confirmYes);
      break;
    case `${prefix}no`:
    case `${prefix}nao`:
    case `${prefix}não`:
      console.log(`D|>|Await: No`);
      await message.channel.send(confirmNo);
      break;
  }

  // var reactions = ["❌", "🔸", "✅"];
  // await addReaction(msgEmbed, reactions);
  // console.log("msgEmbed: " + msgEmbed);

  // // Embed handle
  // const handleReactions = (reaction, user) => {
  //   const emoji = reaction._emoji.name;
  //   const { guild } = reaction.message;
  //   const member = guild.members.cache.find((member) => member.id === user.id);
  //   if (!message.author.id == member.id) return;
  //   switch (emoji) {
  //     case "✅":
  //       console.log("ok");
  //       return true;
  //     case "❌":
  //       console.log("not ok");
  //       return false;
  //   }
  // };

  // // Reaction listener
  // const editMessage = async (reaction, user) => {
  //   if (user.id == "805035898990755850") return;
  //   switch (handleReactions(reaction, user)) {
  //     case true:
  //       await msgEmbed.edit(confirmYes);
  //       break;
  //     case false:
  //       await msgEmbed.edit(confirmNo);
  //       break;
  //   }
  // };

  // Inserts into DB
  // await update(date, u.id);
};
