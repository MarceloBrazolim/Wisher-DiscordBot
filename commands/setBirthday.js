const Discord = require("discord.js");
const moment = require("moment");
const addReaction = require("../util/addReaction");

module.exports = async (message, args, uID, client) => {
  moment.locale("pt-br");
  var date = moment(new Date(args[2])).format("DD [de] MMMM[.]");
  console.log(`D|>|Debug: ${date}`);

  var ID = client.users.cache.get("805035898990755850");
  var confirmationEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Blz! A data de aniversário tá correta?")
    .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
    .setDescription(date);

  let msgEmbed = await message.channel.send(confirmationEmbed);
  var reactions = ["❌", "🔸", "✅"];
  await addReaction(msgEmbed, reactions);

  const handleReactions = (reaction, user, add) => {
    if (user.id === "805035898990755850") return;

    const emoji = reaction._emoji.name;
    const { guild } = reaction.message;

    const member = guild.members.chache.find((member) => member.id === user.id);

    if (add) {

    }
  };

  client.on("messageReactionAdd", (reaction, user) => {
    handleReactions(reaction, user, true);
  });

  // Inserts into DB
  // await update(date, uID);
};
