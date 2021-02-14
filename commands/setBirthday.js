const Discord = require("discord.js");
const moment = require("moment");
const addReaction = require("../util/addReaction");

<<<<<<< Updated upstream
module.exports = async (message, args, uID, client) => {
  moment.locale("pt-br");
  var date = moment(new Date(args[2])).format("DD [de] MMMM[.]");
  console.log(`D|>|Debug: ${date}`);
=======
module.exports = async (message, u, date) => {
  confirmationEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Blz! A data de aniversário está certa?")
    .setDescription(`${date}.`);
  // const message.channel.fetch().then((wMessage) => { await message.channel.send(confirmationEmbed);}
  // const reactions = ["❌", "🔸", "✅"];
  await addReaction(msgEmbed, reactions);
>>>>>>> Stashed changes

  var ID = client.users.cache.get("805035898990755850");
  var confirmationEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Confirmação")
    .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
    .addField("Blz! A data de aniversário tá correta?", date);

  let msgEmbed = await message.channel.send(confirmationEmbed);
  var reactions = ["❌", "🔸", "✅"];
  await addReaction(msgEmbed, reactions)

  // Inserts into DB
  // await update(date, uID);
};
