const Discord = require("discord.js");
const moment = require("moment");
const addReaction = require("../util/addReaction");

module.exports = async (message, args, uID, client) => {
  // Format date
  moment.locale("pt-br");
  var date = moment(new Date(args[2])).format("DD [de] MMMM[.]");
  console.log(`D|>|Debug: ${date}`);

  // Embeds
  const ID = client.users.cache.get("805035898990755850");
  var confirmationEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Confirmação")
    .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
    .addField("Blz! A data de aniversário tá correta?", date);

  // First embed
  let msgEmbed = await message.channel.send(confirmationEmbed);
  var reactions = ["❌", "🔸", "✅"];
  await addReaction(msgEmbed, reactions);

  // Embed handle
  const handleReactions = (reaction, user) => {
    const emoji = reaction._emoji.name;
    const { guild } = reaction.message;
    const member = guild.members.cache.find((member) => member.id === user.id);
    if (!message.author.id == member.id) return;
    switch (emoji) {
      case "✅":
        console.log("ok");
        return true;
      case "❌":
        console.log("not ok");
        return false;
    }
  };

  // Inserts into DB
  // await update(date, uID);
};
